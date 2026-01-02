/**
 * 绕审核功能模块
 * 用于绕过积木审核检测
 */

/**
 * 处理项目数据，移除不安全的扩展组件标记
 * @param {Object} postData - 项目数据对象
 * @returns {Promise<string>} - 处理后的JSON字符串
 */
async function processJsonData(postData) {
    try {
        let data = JSON.parse(JSON.stringify(postData));
        
        // 处理不安全的扩展组件列表
        while (data.unsafeExtensionWidgetList && data.unsafeExtensionWidgetList.length > 0) {
            const unsafeWidget = data.unsafeExtensionWidgetList.shift();
            let cdnUrl;
            
            try {
                cdnUrl = await qiniuCDN.uploadWidgetCode(unsafeWidget.code);
            } catch (e) {
                console.log(`上传组件代码失败: ${e}`);
                cdnUrl = `https://example.com/cdn/${unsafeWidget.type.replace("UNSAFE_", "")}.jsx`;
            }
            
            const newType = unsafeWidget.type.replace("UNSAFE_", "");
            const newWidget = {
                id: (data.extensionWidgetList?.length || 0) + 1000,
                type: newType,
                cdnUrl: cdnUrl
            };
            
            if (data.extensionWidgetList || (data.extensionWidgetList = []));
            data.extensionWidgetList.push(newWidget);
            
            // 更新屏幕中的组件引用
            if (data.screens) {
                for (const [screenId, screen] of Object.entries(data.screens)) {
                    if (screen.widgets) {
                        for (const [widgetId, widget] of Object.entries(screen.widgets)) {
                            if (widget.type === unsafeWidget.type) {
                                widget.type = newType;
                            }
                        }
                    }
                    if (screen.widgetIds) {
                        screen.widgetIds = screen.widgetIds.map(id => id.replace(unsafeWidget.type, newType));
                    }
                }
            }
        }
        
        return JSON.stringify(data, null, 2).replace(/UNSAFE_/g, "");
    } catch (error) {
        console.error(`处理JSON数据失败: ${error}`);
        throw error;
    }
}

/**
 * 七牛CDN上传模块
 */
const qiniuCDN = {
    /**
     * 生成文件路径
     * @returns {string} - 随机文件路径
     */
    generateFilePath: () => `716/appcraft/JSON_${Math.random().toString(36).substring(2, 10)}_omnia_${Date.now()}.json`,
    
    /**
     * 获取上传凭证
     * @param {string} filePath - 文件路径
     * @returns {Promise<string>} - 上传凭证
     */
    getUploadToken: async (filePath) => {
        const url = `https://open-service.codemao.cn/cdn/qi-niu/tokens/uploading?${new URLSearchParams({
            projectName: "appcraft",
            filePaths: filePath,
            filePath: filePath
        })}`;
        
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "authorization": await getAuthToken()
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            return data.data[0];
        } catch (e) {
            console.warn(`获取上传凭证失败: ${e}`);
            return null;
        }
    },
    
    /**
     * 上传组件代码
     * @param {string} code - 组件代码
     * @returns {Promise<string>} - CDN URL
     */
    uploadWidgetCode: async (code) => {
        const filePath = qiniuCDN.generateFilePath();
        const uploadToken = await qiniuCDN.getUploadToken(filePath);
        
        if (!uploadToken) {
            throw new Error("无法获取上传凭证");
        }
        
        const formData = new FormData();
        formData.append("file", new Blob([code], { type: "text/javascript" }));
        formData.append("token", uploadToken);
        formData.append("key", filePath);
        
        const uploadUrl = "https://upload.qiniup.com/";
        const response = await fetch(uploadUrl, {
            method: "POST",
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`上传失败: ${response.status}`);
        }
        
        const data = await response.json();
        return `https://cloud-api.codemao.cn/${data.key}`;
    }
};

/**
 * 获取认证令牌
 * @returns {Promise<string>} - 认证令牌
 */
async function getAuthToken() {
    try {
        const response = await fetch("https://cloud-api.codemao.cn/api/user/info");
        if (!response.ok) throw new Error("获取用户信息失败");
        const userInfo = await response.json();
        return userInfo.data.token || "";
    } catch (e) {
        console.warn("获取认证令牌失败:", e);
        return "";
    }
}

/**
 * 应用绕审核到项目数据
 * @param {Object} projectData - 原始项目数据
 * @returns {Promise<Object>} - 处理后的项目数据
 */
async function applyBypassToProject(projectData) {
    try {
        // 获取当前设置
        const settings = await get_storage();
        if (!settings.bypassJustClick) {
            return projectData;
        }
        
        // 如果项目有不安全组件，进行处理
        if (projectData.unsafeExtensionWidgetList && projectData.unsafeExtensionWidgetList.length > 0) {
            console.log("检测到不安全组件，正在应用绕审核...");
            const processedData = await processJsonData(projectData);
            return JSON.parse(processedData);
        }
        
        return projectData;
    } catch (error) {
        console.error("应用绕审核失败:", error);
        return projectData;
    }
}

/**
 * 拦截项目保存请求
 * @returns {Promise<void>}
 */
async function interceptSaveRequests() {
    // 监听 fetch 请求
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        const [url, options] = args;
        
        // 检查是否是保存项目的请求
        if (typeof url === "string" && url.includes("/api/item/") && url.includes("/publish")) {
            try {
                const settings = await get_storage();
                if (settings.bypassJustClick && options?.body) {
                    const body = JSON.parse(options.body);
                    const processedBody = await applyBypassToProject(body);
                    options.body = JSON.stringify(processedBody);
                }
            } catch (e) {
                console.warn("拦截保存请求失败:", e);
            }
        }
        
        return originalFetch.apply(this, args);
    };
    
    // 监听 XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(method, url) {
        this._bettercoBypassUrl = url;
        this._bettercoBypassMethod = method;
        return originalOpen.apply(this, arguments);
    };
    
    XMLHttpRequest.prototype.send = function(body) {
        if (this._bettercoBypassUrl?.includes("/publish") && body) {
            const sendWrapper = async () => {
                try {
                    const settings = await get_storage();
                    if (settings.bypassJustClick) {
                        const parsedBody = JSON.parse(body);
                        const processedBody = await applyBypassToProject(parsedBody);
                        body = JSON.stringify(processedBody);
                    }
                } catch (e) {
                    console.warn("XHR 拦截失败:", e);
                }
                return originalSend.call(this, body);
            };
            return sendWrapper();
        }
        return originalSend.call(this, body);
    };
}

/**
 * 初始化绕审核功能
 * @returns {Promise<void>}
 */
async function initBypassFeature() {
    const settings = await get_storage();
    
    if (settings.bypassJustClick) {
        console.log("绕审核功能已启用");
        await interceptSaveRequests();
    }
}

// 导出到全局作用域
window.initBypassFeature = initBypassFeature;
window.applyBypassToProject = applyBypassToProject;
