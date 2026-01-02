// BetterCo 自定义弹窗组件 - 使用 COCO 原生样式
(function() {
    'use strict';

    // 弹窗样式
    const dialogStyle = `
        .betterco-dialog-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
        }
        .betterco-dialog-overlay.show {
            opacity: 1;
            pointer-events: auto;
        }
        .betterco-dialog {
            background: var(--q-popup, #FFFFFF);
            border-radius: 14px;
            box-shadow: var(--q-shadow, 0 4px 20px 0 rgba(0, 0, 40, .12));
            border: 1px solid var(--q-border, rgba(0, 0, 20, .06));
            min-width: 400px;
            max-width: 90vw;
            max-height: 90vh;
            overflow: hidden;
            transform: scale(0.9);
            transition: transform 0.2s;
        }
        .betterco-dialog-overlay.show .betterco-dialog {
            transform: scale(1);
        }
        .betterco-dialog-header {
            padding: 20px 24px;
            border-bottom: 1px solid var(--q-border, rgba(0, 0, 20, .06));
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .betterco-dialog-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--q-text-1, #323234);
            margin: 0;
        }
        .betterco-dialog-close {
            width: 32px;
            height: 32px;
            border: none;
            background: transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            color: var(--q-text-3, #909092);
            transition: all 0.15s;
        }
        .betterco-dialog-close:hover {
            background: var(--q-hover, rgba(0, 0, 20, .06));
            color: var(--q-text-1, #323234);
        }
        .betterco-dialog-body {
            padding: 24px;
            color: var(--q-text-2, #505052);
            font-size: 14px;
            line-height: 1.6;
        }
        .betterco-dialog-footer {
            padding: 16px 24px;
            border-top: 1px solid var(--q-border, rgba(0, 0, 20, .06));
            display: flex;
            justify-content: flex-end;
            gap: 12px;
        }
        .betterco-dialog-btn {
            padding: 8px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            transition: all 0.15s;
            min-width: 80px;
        }
        .betterco-dialog-btn-primary {
            background: var(--q-theme, #3080FF);
            color: #FFFFFF;
        }
        .betterco-dialog-btn-primary:hover {
            background: #1e6fe6;
        }
        .betterco-dialog-btn-secondary {
            background: var(--q-input, #F5F5F7);
            color: var(--q-text-2, #505052);
        }
        .betterco-dialog-btn-secondary:hover {
            background: var(--q-hover, rgba(0, 0, 20, .06));
        }
        .betterco-dialog-btn-danger {
            background: #e64942;
            color: #FFFFFF;
        }
        .betterco-dialog-btn-danger:hover {
            background: #df4740;
        }
        .betterco-dialog-icon {
            width: 64px;
            height: 64px;
            margin: 0 auto 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
        }
        .betterco-dialog-icon-success {
            background: rgba(48, 128, 255, 0.1);
            color: var(--q-theme, #3080FF);
        }
        .betterco-dialog-icon-error {
            background: rgba(230, 73, 66, 0.1);
            color: #e64942;
        }
        .betterco-dialog-icon-warning {
            background: rgba(255, 193, 7, 0.1);
            color: #ffc107;
        }
        .betterco-dialog-icon-info {
            background: rgba(48, 128, 255, 0.1);
            color: var(--q-theme, #3080FF);
        }
        html.dark .betterco-dialog {
            background: var(--q-popup, #2D2D2E);
        }
        html.q-dark .betterco-dialog {
            background: var(--q-popup, #2D2D2E);
        }
    `;

    // 注入样式
    function injectStyles() {
        if (document.getElementById('betterco-dialog-style')) return;
        const style = document.createElement('style');
        style.id = 'betterco-dialog-style';
        style.textContent = dialogStyle;
        document.head.appendChild(style);
    }

    // 创建弹窗HTML
    function createDialogHTML(title, text, icon, buttons) {
        const overlay = document.createElement('div');
        overlay.className = 'betterco-dialog-overlay';
        
        const dialog = document.createElement('div');
        dialog.className = 'betterco-dialog';
        
        // 图标
        let iconHTML = '';
        if (icon) {
            const iconClass = `betterco-dialog-icon betterco-dialog-icon-${icon}`;
            const iconSymbol = {
                success: '✓',
                error: '✕',
                warning: '⚠',
                info: 'ℹ'
            }[icon] || '';
            iconHTML = `<div class="${iconClass}">${iconSymbol}</div>`;
        }
        
        // 标题和关闭按钮
        const headerHTML = `
            <div class="betterco-dialog-header">
                <h3 class="betterco-dialog-title">${title || ''}</h3>
                <button class="betterco-dialog-close" aria-label="关闭">×</button>
            </div>
        `;
        
        // 内容
        const bodyHTML = `
            <div class="betterco-dialog-body">
                ${iconHTML}
                ${text ? `<div>${text}</div>` : ''}
            </div>
        `;
        
        // 按钮 - 支持数组或对象格式
        let footerHTML = '';
        if (buttons) {
            let buttonsArray = [];
            if (Array.isArray(buttons)) {
                buttonsArray = buttons;
            } else if (typeof buttons === 'object') {
                // 对象格式: { delete: "卸载", about: "关于" }
                buttonsArray = Object.keys(buttons).map(key => ({
                    text: buttons[key],
                    type: key === 'confirm' || key === 'delete' ? 'danger' : 'secondary',
                    action: key
                }));
            } else if (buttons === true) {
                // buttons: true 表示显示确认和取消按钮
                buttonsArray = [
                    { text: '取消', type: 'secondary', action: 'cancel' },
                    { text: '确认', type: 'primary', action: 'confirm' }
                ];
            }
            
            if (buttonsArray.length > 0) {
                const buttonsHTML = buttonsArray.map(btn => {
                    const btnClass = `betterco-dialog-btn betterco-dialog-btn-${btn.type || 'secondary'}`;
                    return `<button class="${btnClass}" data-action="${btn.action || 'cancel'}">${btn.text || '确定'}</button>`;
                }).join('');
                footerHTML = `<div class="betterco-dialog-footer">${buttonsHTML}</div>`;
            }
        }
        
        dialog.innerHTML = headerHTML + bodyHTML + footerHTML;
        overlay.appendChild(dialog);
        
        return overlay;
    }

    // 显示弹窗
    function showDialog(options) {
        return new Promise((resolve) => {
            injectStyles();
            
            const {
                title = '',
                text = '',
                icon = null,
                buttons = [{ text: '确定', type: 'primary', action: 'confirm' }],
                showCloseButton = true
            } = options;
            
            const overlay = createDialogHTML(title, text, icon, buttons);
            document.body.appendChild(overlay);
            
            // 显示动画
            requestAnimationFrame(() => {
                overlay.classList.add('show');
            });
            
            // 关闭按钮
            if (showCloseButton) {
                const closeBtn = overlay.querySelector('.betterco-dialog-close');
                closeBtn.addEventListener('click', () => {
                    closeDialog(overlay);
                    resolve('cancel');
                });
            }
            
            // 按钮事件
            const btnElements = overlay.querySelectorAll('.betterco-dialog-btn');
            btnElements.forEach(btn => {
                btn.addEventListener('click', () => {
                    const action = btn.dataset.action;
                    closeDialog(overlay);
                    resolve(action);
                });
            });
            
            // 点击遮罩关闭
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    closeDialog(overlay);
                    resolve('cancel');
                }
            });
        });
    }

    // 关闭弹窗
    function closeDialog(overlay) {
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.remove();
        }, 200);
    }

    // 简化的API，兼容 SweetAlert 风格
    window.BetterCoDialog = {
        // 基础方法
        show: showDialog,
        
        // 快捷方法
        success: (title, text) => showDialog({ title, text, icon: 'success' }),
        error: (title, text) => showDialog({ title, text, icon: 'error' }),
        warning: (title, text) => showDialog({ title, text, icon: 'warning' }),
        info: (title, text) => showDialog({ title, text, icon: 'info' }),
        
        // 确认对话框
        confirm: (title, text) => showDialog({
            title,
            text,
            icon: 'warning',
            buttons: [
                { text: '取消', type: 'secondary', action: 'cancel' },
                { text: '确认', type: 'primary', action: 'confirm' }
            ]
        }),
        
        // 兼容 SweetAlert 的 default 方法
        default: function(title, text, icon, options) {
            // 处理不同的调用方式
            if (typeof title === 'object' && title !== null && !title.nodeType) {
                // 第一个参数是对象配置: Q.default({title, text, icon, buttons})
                const config = title;
                return showDialog({
                    title: config.title || '',
                    text: config.content || config.text || '',
                    icon: config.icon || null,
                    buttons: config.buttons || (config.buttons === false ? [] : [{ text: '确定', type: 'primary', action: 'confirm' }])
                });
            } else if (typeof text === 'object' && text !== null && !text.nodeType) {
                // 第二个参数是对象配置: Q.default(title, {content, buttons})
                const config = text;
                return showDialog({
                    title: title || '',
                    text: config.content || config.text || '',
                    icon: config.icon || icon || null,
                    buttons: config.buttons !== undefined ? config.buttons : [{ text: '确定', type: 'primary', action: 'confirm' }]
                });
            } else if (typeof text === 'string' && typeof icon === 'object' && icon !== null) {
                // 第三个参数是配置对象: Q.default(title, text, "info", {buttons})
                const config = icon;
                return showDialog({
                    title: title || '',
                    text: text || '',
                    icon: config.icon || icon || null,
                    buttons: config.buttons !== undefined ? config.buttons : [{ text: '确定', type: 'primary', action: 'confirm' }]
                });
            } else {
                // 简单调用: Q.default(title, text, icon)
                // 或者: Q.default(title, text) - 需要检查是否是确认对话框
                let dialogIcon = icon || null;
                let dialogButtons = [{ text: '确定', type: 'primary', action: 'confirm' }];
                
                // 如果是确认对话框（title包含"确认"或"是否"）
                if (title && (title.includes('确认') || title.includes('是否'))) {
                    dialogButtons = [
                        { text: '取消', type: 'secondary', action: 'cancel' },
                        { text: '确认', type: 'primary', action: 'confirm' }
                    ];
                    if (!dialogIcon) dialogIcon = 'warning';
                }
                
                return showDialog({ 
                    title: title || '', 
                    text: text || '', 
                    icon: dialogIcon,
                    buttons: dialogButtons
                });
            }
        }
    };

    // 包装 Q.default 函数（即使 Q 是只读的，我们也可以包装函数本身）
    function wrapQDefault() {
        if (!window.BetterCoDialog) return false;
        
        if (typeof window.Q === 'undefined' || !window.Q.default) {
            return false;
        }
        
        const ourDefault = window.BetterCoDialog.default.bind(window.BetterCoDialog);
        const originalDefault = window.Q.default;
        
        // 如果 originalDefault 已经是我们的方法，不需要再次包装
        if (originalDefault === ourDefault || originalDefault.toString().includes('BetterCoDialog')) {
            return true;
        }
        
        // 创建一个包装函数，拦截所有调用
        const wrappedDefault = function(...args) {
            // 调用我们的自定义弹窗
            return ourDefault.apply(window.BetterCoDialog, args);
        };
        
        // 复制原始函数的所有属性
        try {
            Object.getOwnPropertyNames(originalDefault).forEach(prop => {
                try {
                    const descriptor = Object.getOwnPropertyDescriptor(originalDefault, prop);
                    if (descriptor) {
                        Object.defineProperty(wrappedDefault, prop, descriptor);
                    }
                } catch (e) {
                    // 忽略无法复制的属性
                }
            });
        } catch (e) {
            // 忽略属性复制错误
        }
        
        // 尝试替换 Q.default
        try {
            // 先尝试使用 defineProperty
            Object.defineProperty(window.Q, 'default', {
                value: wrappedDefault,
                writable: true,
                configurable: true,
                enumerable: true
            });
            console.log('BetterCo: 已包装 Q.default 使用自定义弹窗');
            return true;
        } catch (e) {
            // 如果 defineProperty 失败，说明 Q.default 是只读的
            // 这种情况下，我们需要在调用时拦截
            console.warn('BetterCo: Q.default 是只读的，将在调用时拦截');
            
            // 保存原始方法
            window.__betterco_original_q_default = originalDefault;
            
            // 尝试使用 Proxy 包装整个 Q 对象
            try {
                const QProxy = new Proxy(window.Q, {
                    get: function(target, prop) {
                        if (prop === 'default') {
                            return wrappedDefault;
                        }
                        return target[prop];
                    }
                });
                
                // 尝试替换 window.Q
                try {
                    Object.defineProperty(window, 'Q', {
                        value: QProxy,
                        writable: true,
                        configurable: true
                    });
                    console.log('BetterCo: 已使用 Proxy 包装 Q 对象');
                    return true;
                } catch (e2) {
                    console.warn('BetterCo: 无法替换 window.Q');
                }
            } catch (e2) {
                console.warn('BetterCo: 无法创建 Proxy');
            }
        }
        
        return false;
    }
    
    // 设置函数
    function setupQDefault() {
        return wrapQDefault();
    }
    
    // 立即尝试设置
    setupQDefault();
    
    // 持续监控，在控件移除器脚本加载后立即包装
    let checkCount = 0;
    const maxChecks = 20; // 最多检查10秒
    const checkInterval = setInterval(() => {
        checkCount++;
        if (window.Q && window.Q.default && window.BetterCoDialog) {
            if (wrapQDefault()) {
                clearInterval(checkInterval);
                return;
            }
        }
        if (checkCount >= maxChecks) {
            clearInterval(checkInterval);
        }
    }, 500);
    
    // 也暴露为 swal（兼容性）
    if (typeof window.swal === 'undefined') {
        window.swal = window.BetterCoDialog.default.bind(window.BetterCoDialog);
    }
    
    // 导出设置函数供外部调用
    window.__betterco_setup_dialog = setupQDefault;
})();

