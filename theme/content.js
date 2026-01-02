// 默认设置
const defaultData = {
  openTheme: true,
  showControlBar: true,
  hideStage: false,
  hideRuler: false,
  themeType: "light",
  themeColor: "#3080FF",
  bypassJustClick: true,
  customFavicon: "data:image/png;base64,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", // 自定义图标 URL
};

function set_storage(key, data) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem("betterco-" + key, JSON.stringify(data));
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

async function updateSettingsUI() {
  const data = await get_storage();
  const enableSwitch = document.getElementById("betterco-enableTheme");
  const barSwitch = document.getElementById("betterco-showControlBar");
  const stageSwitch = document.getElementById("betterco-hideStage");
  const rulerSwitch = document.getElementById("betterco-hideRuler");
  if (enableSwitch && enableSwitch.setChecked)
    enableSwitch.setChecked(
      data.openTheme !== undefined ? data.openTheme : defaultData.openTheme
    );
  if (barSwitch && barSwitch.setChecked)
    barSwitch.setChecked(
      data.showControlBar !== undefined
        ? data.showControlBar
        : defaultData.showControlBar
    );
  if (stageSwitch && stageSwitch.setChecked)
    stageSwitch.setChecked(
      data.hideStage !== undefined ? data.hideStage : defaultData.hideStage
    );
  if (rulerSwitch && rulerSwitch.setChecked)
    rulerSwitch.setChecked(
      data.hideRuler !== undefined ? data.hideRuler : defaultData.hideRuler
    );
  const type = data.themeType || defaultData.themeType;
  document.querySelectorAll(".betterco-theme-selector .item").forEach((i) => {
    i.classList.toggle("active", i.dataset.type === type);
  });
  const color = data.themeColor || defaultData.themeColor;
  document.querySelectorAll(".betterco-color-selector .item").forEach((i) => {
    i.classList.toggle("active", i.dataset.color === color);
  });
}

/**
 * 读取 storage 数据
 * key 为 null 时会返回所有储存的数据，否则返回指定 key 的数据
 */
function get_storage(key = null) {
  return new Promise((resolve) => {
    if (key === null) {
      const keys = Object.keys(defaultData);
      const result = {};
      keys.forEach((k) => {
        const v = localStorage.getItem("betterco-" + k);
        // 兼容早期可能写入的 "undefined" 或空字符串，统一视为未设置
        if (v === null || v === "" || v === "undefined") {
          result[k] = undefined;
        } else {
          try {
            result[k] = JSON.parse(v);
          } catch {
            // 若解析失败，也当作未设置，避免页面直接报错
            result[k] = undefined;
          }
        }
      });
      resolve(result);
    } else {
      const v = localStorage.getItem("betterco-" + key);
      if (v === null || v === "" || v === "undefined") {
        resolve(undefined);
      } else {
        try {
          resolve(JSON.parse(v));
        } catch {
          resolve(undefined);
        }
      }
    }
  });
}

/**
 * 接收扩展发送的消息
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action == "updateTheme") {
    updateTheme();
    // 可以向发送者发送响应
    // sendResponse({response: "已收到消息"})
  }
});

/**
 * 更新主题
 */
async function updateTheme() {
  // 读取保存的设置
  const data = await get_storage();
  let openTheme =
    data.openTheme !== undefined ? data.openTheme : defaultData.openTheme;
  let showControlBar =
    data.showControlBar !== undefined
      ? data.showControlBar
      : defaultData.showControlBar;
  let hideStage =
    data.hideStage !== undefined ? data.hideStage : defaultData.hideStage;
  let hideRuler =
    data.hideRuler !== undefined ? data.hideRuler : defaultData.hideRuler;
  let themeType = data.themeType || defaultData.themeType;
  let themeColor = data.themeColor || defaultData.themeColor;
  let customFavicon = data.customFavicon || defaultData.customFavicon;

  // 更新网页图标
  if (customFavicon) {
    updateFavicon(customFavicon);
  }

  if (openTheme) {
    // 给 html 添加类名进行主题切换
    if (themeType == "auto") {
      handleColorSchemeChange(colorSchemeQuery);
    } else {
      document.documentElement.classList.toggle("q-dark", themeType == "dark");
    }

    // 向页面中添加样式文件
    if (!document.getElementById("q-customTheme_style")) {
      let styleElement = document.createElement("link");
      styleElement.id = "q-customTheme_style";
      styleElement.rel = "stylesheet";
      styleElement.href = chrome.runtime.getURL("theme/theme.css");
      document.body.appendChild(styleElement);

      let cloudStyleElement = document.createElement("link");
      cloudStyleElement.id = "q-customTheme_cloudStyle";
      cloudStyleElement.rel = "stylesheet";
      cloudStyleElement.href = chrome.runtime.getURL("theme/cloud.css");
      document.body.appendChild(cloudStyleElement);

      // 加载自定义组件样式
      let widgetStyleElement = document.createElement("link");
      widgetStyleElement.id = "q-widget_style";
      widgetStyleElement.rel = "stylesheet";
      widgetStyleElement.href = chrome.runtime.getURL("widget/widget.css");
      document.body.appendChild(widgetStyleElement);

      // 清除指定 symbol 元素的初始样式，部分图标因为已设置 fill 等属性，无法通过 CSS 覆盖
      let symbolIds = [
        "icon-help-circle-active",
        "icon-settings",
        "icon-cloud-manager-normal",
        "icon-box",
        "icon-data",
        "icon-search",
        "icon-material-search",
      ];
      symbolIds.forEach((id) => {
        if (!document.getElementById(id)) return;
        document
          .getElementById(id)
          .querySelectorAll("path")
          .forEach((path) => {
            path.setAttribute("fill", "");
            path.setAttribute("opacity", "1");
          });
        document
          .getElementById(id)
          .querySelectorAll("g")
          .forEach((g) => {
            g.setAttribute("fill", "");
          });
      });

      // 修改页面中的 SVG 图标
      let pagePath = window.location.pathname;
      if (pagePath == "/home" || pagePath == "/work") {
        document
          .querySelector("#icon-help path")
          .setAttribute(
            "d",
            "m512 938.7c-235.9 0-426.7-190.8-426.7-426.7 0-235.9 190.8-426.7 426.7-426.7 235.9 0 426.7 190.8 426.7 426.7 0 235.9-190.8 426.7-426.7 426.7zm0-768c-90.5 0-177.3 35.9-241.4 99.9-64 64.1-99.9 150.9-99.9 241.4 0 90.5 35.9 177.3 99.9 241.4 64.1 64 150.9 99.9 241.4 99.9 90.5 0 177.3-35.9 241.4-99.9 64-64.1 99.9-150.9 99.9-241.4 0-90.5-35.9-177.3-99.9-241.4-64.1-64-150.9-99.9-241.4-99.9zm0 512c11.3 0 22.2 4.5 30.2 12.5 8 8 12.5 18.8 12.5 30.1 0 11.3-4.5 22.2-12.5 30.2-8 8-18.9 12.5-30.2 12.5-11.3 0-22.2-4.5-30.2-12.5-8-8-12.5-18.9-12.5-30.2 0-11.3 4.5-22.1 12.5-30.1 8-8 18.9-12.5 30.2-12.5zm0-405.4c35.9 0 70.8 12.5 98.5 35.4 27.7 22.9 46.6 54.7 53.4 90 6.8 35.3 1.1 71.9-16.1 103.4-17.3 31.5-44.9 56.1-78.3 69.5q-1.8 0.7-3.6 1.6-1.7 0.9-3.4 1.9-1.6 1.1-3.1 2.4-1.5 1.2-2.9 2.6c-1.9 2.2-2.2 4.9-2.1 7.7l0.3 5.5c0 10.9-4.2 21.4-11.7 29.3-7.4 7.9-17.6 12.6-28.5 13.3-10.9 0.6-21.5-2.9-29.9-9.9-8.3-7-13.7-16.9-15-27.7l-0.3-5v-10.6c0-49.2 39.7-78.8 68.5-90.3 23.8-9.5 40.5-31.5 43.2-57 2.8-25.5-8.8-50.5-30.1-64.9-21.2-14.4-48.7-15.9-71.4-3.8-22.7 12-36.8 35.6-36.8 61.3 0 11.3-4.5 22.2-12.5 30.2-8 8-18.9 12.5-30.2 12.5-11.3 0-22.2-4.5-30.2-12.5-8-8-12.5-18.9-12.5-30.2 0-20.3 4-40.4 11.8-59.2 7.8-18.8 19.2-35.8 33.5-50.2 14.4-14.3 31.4-25.7 50.2-33.5 18.8-7.8 38.9-11.8 59.2-11.8z"
          );
        document
          .querySelector("#icon-feedback path")
          .setAttribute(
            "d",
            "m810.7 155c16.1 0 32.2 3.1 47.2 9 15 6 28.8 14.8 40.6 25.9 11.8 11.1 21.3 24.3 28.2 39 6.8 14.6 10.8 30.4 11.8 46.6l0.2 7.5v426.7c0 16.1-3.1 32.2-9.1 47.2-5.9 15-14.7 28.8-25.8 40.6-11.1 11.8-24.3 21.3-39 28.2-14.7 6.8-30.5 10.8-46.6 11.8l-7.5 0.2h-157.8l-111.3 74.2c-3.9 2.6-8.2 4.7-12.6 6.2-4.5 1.5-9.1 2.4-13.8 2.7-4.7 0.2-9.4-0.1-14-1.1-4.6-0.9-9.1-2.5-13.3-4.6l-5.5-3.2-111.3-74.2h-157.8c-16.1 0-32.2-3.1-47.2-9.1-15-5.9-28.8-14.7-40.6-25.8-11.8-11.1-21.3-24.3-28.2-39-6.8-14.7-10.8-30.5-11.8-46.6l-0.2-7.5v-426.7c0-16.2 3.1-32.2 9.1-47.2 5.9-15.1 14.7-28.8 25.8-40.6 11.1-11.8 24.3-21.3 39-28.2 14.7-6.8 30.5-10.8 46.6-11.8l7.5-0.2zm0 85.3h-597.3c-5.2 0-10.3 1-15.2 2.8-4.8 1.9-9.3 4.6-13.1 8-3.9 3.5-7.1 7.6-9.5 12.2-2.4 4.6-4 9.6-4.6 14.7l-0.3 5v426.7c0 5.1 1 10.3 2.8 15.1 1.9 4.9 4.6 9.3 8 13.2 3.5 3.9 7.6 7.1 12.2 9.5 4.6 2.4 9.6 3.9 14.7 4.5l5 0.3h157.7q5.4 0 10.8 0.7 5.3 0.7 10.5 2 5.2 1.4 10.2 3.3 5 2 9.7 4.6l6.2 3.8 93.6 62.3 93.5-62.3q4.5-3 9.3-5.4 4.8-2.4 9.9-4.2 5.1-1.8 10.4-2.9 5.2-1.1 10.6-1.6l7.2-0.3h157.7c5.2 0 10.4-0.9 15.2-2.8 4.8-1.8 9.3-4.5 13.2-7.9 3.9-3.5 7.1-7.6 9.5-12.2 2.4-4.6 3.9-9.6 4.5-14.7l0.3-5v-426.7c0-5.2-0.9-10.3-2.8-15.2-1.8-4.8-4.5-9.3-8-13.1-3.4-3.9-7.5-7.1-12.1-9.5-4.6-2.4-9.6-4-14.8-4.6zm-448 213.4c17 0 33.3 6.7 45.3 18.7 12 12 18.7 28.3 18.7 45.3 0 16.9-6.7 33.2-18.7 45.2-12 12-28.3 18.8-45.3 18.8-16.9 0-33.2-6.8-45.2-18.8-12-12-18.8-28.3-18.8-45.2 0-17 6.8-33.3 18.8-45.3 12-12 28.3-18.7 45.2-18.7zm298.7 0c17 0 33.2 6.7 45.2 18.7 12 12 18.8 28.3 18.8 45.3 0 16.9-6.8 33.2-18.8 45.2-12 12-28.2 18.8-45.2 18.8-17 0-33.3-6.8-45.3-18.8-12-12-18.7-28.3-18.7-45.2 0-17 6.7-33.3 18.7-45.3 12-12 28.3-18.7 45.3-18.7z"
          );
        document
          .querySelector("#icon-home path")
          .setAttribute(
            "d",
            "m563.2 113.1c-7.3-5.5-15.5-9.8-24.2-12.7-8.7-2.9-17.8-4.4-27-4.4-9.2 0-18.3 1.5-27 4.4-8.7 2.9-16.9 7.2-24.2 12.7l-298.7 224c-5.2 3.9-10.1 8.5-14.3 13.6-4.2 5-7.8 10.6-10.8 16.5-2.9 5.9-5.2 12.1-6.7 18.5-1.5 6.5-2.3 13-2.3 19.6v405.4c0 11.2 2.2 22.3 6.5 32.6 4.3 10.4 10.6 19.8 18.5 27.7 7.9 7.9 17.3 14.2 27.7 18.5 10.3 4.3 21.4 6.5 32.6 6.5h166.4c6.2 0 12.3-1.2 18-3.6 5.7-2.3 10.9-5.8 15.2-10.1 4.4-4.4 7.8-9.6 10.2-15.3 2.4-5.7 3.6-11.8 3.6-17.9v-209.1c0-22.6 9-44.3 25-60.3 16-16 37.7-25 60.3-25 22.6 0 44.3 9 60.3 25 16 16 25 37.7 25 60.3v209.1c0 6.1 1.2 12.2 3.6 17.9 2.4 5.7 5.8 10.9 10.2 15.3 4.3 4.3 9.5 7.8 15.2 10.1 5.7 2.4 11.8 3.6 18 3.6h166.4c11.2 0 22.3-2.2 32.6-6.5 10.4-4.3 19.8-10.6 27.7-18.5 7.9-7.9 14.2-17.3 18.5-27.7 4.3-10.3 6.5-21.4 6.5-32.6v-405.4c0-6.6-0.8-13.1-2.3-19.6-1.5-6.4-3.8-12.6-6.7-18.5-3-5.9-6.6-11.5-10.8-16.5-4.2-5.1-9.1-9.7-14.3-13.6z"
          );
        document
          .querySelector("#icon-work path")
          .setAttribute(
            "d",
            "m512 85.3v277.4c0 7.9 1.5 15.7 4.3 23 2.8 7.4 7 14.2 12.3 20 5.3 5.8 11.7 10.6 18.7 14.2 7.1 3.5 14.7 5.7 22.6 6.5l6.1 0.3h277.3v426.6c0 10.7-2 21.3-5.9 31.2-3.9 9.9-9.6 19.1-16.8 26.9-7.3 7.8-15.9 14.2-25.6 18.8-9.6 4.7-20 7.5-30.6 8.3l-6.4 0.2h-512c-10.7 0-21.2-2-31.2-5.9-9.9-3.9-19-9.6-26.9-16.9-7.8-7.3-14.2-15.9-18.8-25.5-4.6-9.6-7.4-20-8.2-30.7l-0.2-6.4v-682.6c0-10.7 2-21.3 5.9-31.2 3.9-9.9 9.6-19.1 16.8-26.9 7.3-7.8 15.9-14.2 25.6-18.8 9.6-4.7 20-7.5 30.6-8.3l6.4-0.2zm85.3 1.9q5.2 1.1 10.2 2.8 4.9 1.7 9.7 4 4.7 2.3 9.1 5.2 4.4 2.9 8.5 6.3l5.2 4.8 188.3 188.4q3.8 3.7 7 7.9 3.3 4.1 6 8.7 2.7 4.5 4.8 9.3 2.1 4.9 3.6 9.9l1.8 6.8h-254.2z"
          );
        document
          .querySelector("#icon-discover path")
          .setAttribute(
            "d",
            "m606.3 609.6c5.9 2.2 12 3.8 18.2 4.6 6.3 0.9 12.6 1.1 18.8 0.6 6.3-0.5 12.5-1.8 18.5-3.6 6-1.9 11.8-4.4 17.2-7.6l221.7-128c9.7-5.6 18.2-13.1 25.1-21.9 6.8-8.9 11.8-19.1 14.7-29.9 2.9-10.8 3.6-22.1 2.2-33.2-1.5-11.1-5.1-21.9-10.7-31.6l-106.7-184.7c-5.6-9.7-13.1-18.2-22-25-8.8-6.9-19-11.9-29.8-14.8-10.8-2.9-22.1-3.6-33.2-2.1-11.1 1.4-21.9 5.1-31.6 10.7l-221.7 128c-6.5 3.7-12.5 8.3-17.8 13.7-5.3 5.3-9.9 11.3-13.6 17.8-3.7 6.6-6.6 13.6-8.5 20.9-1.9 7.2-2.8 14.7-2.7 22.3q-1.3 0.5-2.6 1.1-1.2 0.6-2.5 1.2-1.2 0.6-2.4 1.2-1.2 0.7-2.4 1.4l-184.8 106.6c-6.5 3.8-12.5 8.4-17.8 13.7-5.3 5.4-9.9 11.4-13.6 17.9-3.7 6.6-6.6 13.6-8.5 20.8-1.9 7.3-2.8 14.8-2.7 22.4q-1.3 0.5-2.6 1.1-1.2 0.5-2.5 1.1-1.2 0.7-2.4 1.3-1.2 0.7-2.4 1.4l-73.9 42.6c-9.7 5.6-18.2 13.1-25.1 22-6.8 8.9-11.8 19-14.7 29.8-2.9 10.9-3.6 22.2-2.2 33.3 1.5 11.1 5.1 21.8 10.7 31.5l21.4 36.9c5.6 9.7 13 18.3 21.9 25.1 8.9 6.8 19.1 11.8 29.9 14.7 10.8 2.9 22.1 3.6 33.2 2.2 11.1-1.5 21.8-5.1 31.5-10.7l73.9-42.7c3.3-1.9 6.3-3.9 9.2-6.1 6.5 3.8 13.4 6.8 20.7 8.8 7.3 2 14.7 3 22.3 3.1 7.5 0 15-1 22.3-2.9 7.3-1.9 14.2-4.8 20.8-8.6l77.5-44.8-89.2 208c-4.4 10.4-4.5 22.2-0.3 32.7 4.2 10.5 12.4 18.9 22.8 23.3 10.4 4.5 22.1 4.6 32.6 0.4 10.5-4.2 18.9-12.4 23.4-22.8l88.8-207.1 88.7 207.1c4.5 10.4 12.9 18.6 23.4 22.8 10.5 4.2 22.3 4.1 32.7-0.4 10.4-4.4 18.6-12.8 22.8-23.3 4.2-10.5 4-22.3-0.4-32.7z"
          );
      }
      if (pagePath == "/editor/") {
        // 修改网页标题
        document.title = "CoCo 编辑器";

        const nameInput = document.querySelector(
          ".Header_projectTitle__3fvYk input"
        );
        const handleInput = () => {
          document.title = "CoCo 编辑器 - " + nameInput.value;
        };
        nameInput.addEventListener("change", handleInput);
        handleInput();

        let observer = new MutationObserver(() => {
          handleInput();
        });
        observer.observe(nameInput, {
          attributes: true,
          attributeFilter: ["value"],
        });

        // 编辑器文件图标
        if (document.querySelectorAll("#icon-file path").length == 2) {
          document.querySelector("#icon-file path").remove();
        }
        document
          .querySelector("#icon-file path")
          .setAttribute(
            "d",
            "m85.3 213.3c0-11.2 2.2-22.3 6.5-32.6 4.3-10.4 10.6-19.8 18.5-27.7 8-7.9 17.4-14.2 27.7-18.5 10.4-4.3 21.5-6.5 32.7-6.5h235.5c6.4 0 12.7 0.7 18.9 2.1 6.2 1.4 12.3 3.6 18 6.3 5.8 2.8 11.2 6.2 16.2 10.1 5 4 9.5 8.5 13.5 13.5l59.7 74.7h320.8c11.2 0 22.3 2.2 32.7 6.5 10.3 4.3 19.7 10.5 27.7 18.5 7.9 7.9 14.2 17.3 18.5 27.6 4.3 10.4 6.5 21.5 6.5 32.7v490.7c0 11.2-2.2 22.3-6.5 32.6-4.3 10.4-10.6 19.8-18.5 27.7-8 7.9-17.4 14.2-27.7 18.5-10.4 4.3-21.5 6.5-32.7 6.5h-682.6c-11.2 0-22.3-2.2-32.7-6.5-10.3-4.3-19.7-10.6-27.7-18.5-7.9-7.9-14.2-17.3-18.5-27.7-4.3-10.3-6.5-21.4-6.5-32.6zm320.9 0h-235.5v597.3h682.6v-490.7h-320.8c-6.4 0-12.7-0.7-19-2.1-6.2-1.4-12.2-3.5-18-6.3-5.7-2.7-11.1-6.1-16.1-10.1-5-4-9.5-8.5-13.5-13.5z"
          );
        document
          .querySelector("#icon-help-circle-active path")
          .setAttribute(
            "d",
            "m512 938.7c-235.9 0-426.7-190.8-426.7-426.7 0-235.9 190.8-426.7 426.7-426.7 235.9 0 426.7 190.8 426.7 426.7 0 235.9-190.8 426.7-426.7 426.7zm0-768c-90.5 0-177.3 35.9-241.4 99.9-64 64.1-99.9 150.9-99.9 241.4 0 90.5 35.9 177.3 99.9 241.4 64.1 64 150.9 99.9 241.4 99.9 90.5 0 177.3-35.9 241.4-99.9 64-64.1 99.9-150.9 99.9-241.4 0-90.5-35.9-177.3-99.9-241.4-64.1-64-150.9-99.9-241.4-99.9zm0 512c11.3 0 22.2 4.5 30.2 12.5 8 8 12.5 18.8 12.5 30.1 0 11.3-4.5 22.2-12.5 30.2-8 8-18.9 12.5-30.2 12.5-11.3 0-22.2-4.5-30.2-12.5-8-8-12.5-18.9-12.5-30.2 0-11.3 4.5-22.1 12.5-30.1 8-8 18.9-12.5 30.2-12.5zm0-405.4c35.9 0 70.8 12.5 98.5 35.4 27.7 22.9 46.6 54.7 53.4 90 6.8 35.3 1.1 71.9-16.1 103.4-17.3 31.5-44.9 56.1-78.3 69.5q-1.8 0.7-3.6 1.6-1.7 0.9-3.4 1.9-1.6 1.1-3.1 2.4-1.5 1.2-2.9 2.6c-1.9 2.2-2.2 4.9-2.1 7.7l0.3 5.5c0 10.9-4.2 21.4-11.7 29.3-7.4 7.9-17.6 12.6-28.5 13.3-10.9 0.6-21.5-2.9-29.9-9.9-8.3-7-13.7-16.9-15-27.7l-0.3-5v-10.6c0-49.2 39.7-78.8 68.5-90.3 23.8-9.5 40.5-31.5 43.2-57 2.8-25.5-8.8-50.5-30.1-64.9-21.2-14.4-48.7-15.9-71.4-3.8-22.7 12-36.8 35.6-36.8 61.3 0 11.3-4.5 22.2-12.5 30.2-8 8-18.9 12.5-30.2 12.5-11.3 0-22.2-4.5-30.2-12.5-8-8-12.5-18.9-12.5-30.2 0-20.3 4-40.4 11.8-59.2 7.8-18.8 19.2-35.8 33.5-50.2 14.4-14.3 31.4-25.7 50.2-33.5 18.8-7.8 38.9-11.8 59.2-11.8z"
          );
        document
          .querySelector("#icon-settings path")
          .setAttribute(
            "d",
            "m458.7 109.5c7.5-4.3 15.4-7.7 23.7-10.1 8.3-2.4 16.9-3.8 25.5-4.1 8.7-0.3 17.3 0.4 25.8 2.2 8.5 1.7 16.7 4.5 24.5 8.2l7.1 3.8 268.6 155c7.5 4.4 14.5 9.6 20.7 15.7 6.3 6 11.8 12.8 16.4 20.1 4.6 7.4 8.3 15.3 11 23.5 2.7 8.3 4.3 16.8 5 25.5l0.2 7.6v310.1c0 8.7-1.1 17.3-3.2 25.8-2.1 8.4-5.2 16.5-9.2 24.2-4.1 7.7-9.1 14.8-14.9 21.3-5.8 6.4-12.4 12.2-19.6 17l-6.4 4.1-268.6 155c-7.5 4.4-15.4 7.8-23.7 10.1-8.3 2.4-16.9 3.8-25.5 4.2-8.7 0.3-17.3-0.4-25.8-2.2-8.5-1.8-16.7-4.5-24.5-8.3l-7.1-3.8-268.6-154.9c-7.5-4.4-14.5-9.6-20.7-15.7-6.3-6-11.8-12.8-16.4-20.1-4.6-7.4-8.3-15.3-11-23.5-2.7-8.3-4.3-16.8-5-25.5l-0.2-7.6v-310.2c0-8.6 1.1-17.3 3.2-25.7 2.1-8.4 5.2-16.6 9.3-24.3 4-7.6 9-14.8 14.8-21.2 5.9-6.5 12.4-12.2 19.6-17.1l6.4-4zm64 73.9q-2-1.2-4.2-1.9-2.2-0.7-4.6-0.9-2.3-0.2-4.6 0.1-2.3 0.3-4.5 1.1l-3.4 1.6-268.6 155q-2 1.2-3.7 2.8-1.7 1.5-3 3.4-1.4 2-2.3 4.1-0.9 2.2-1.3 4.4l-0.3 3.8v310.1q0 2.3 0.5 4.6 0.5 2.3 1.5 4.4 1 2.1 2.4 4 1.4 1.8 3.2 3.3l3 2.1 268.6 155.1q2 1.2 4.2 1.9 2.3 0.7 4.6 0.9 2.3 0.2 4.6-0.1 2.3-0.3 4.5-1.1l3.4-1.6 268.6-155q2-1.2 3.7-2.8 1.7-1.5 3.1-3.4 1.3-1.9 2.2-4.1 0.9-2.1 1.3-4.4l0.3-3.8v-310.1q0-2.3-0.5-4.6-0.5-2.3-1.4-4.4-1-2.1-2.4-3.9-1.4-1.9-3.2-3.4l-3.1-2.2zm-10.7 157.9c45.3 0 88.7 18 120.7 50 32 32 50 75.4 50 120.7 0 45.3-18 88.7-50 120.7-32 32-75.4 50-120.7 50-45.3 0-88.7-18-120.7-50-32-32-50-75.4-50-120.7 0-45.3 18-88.7 50-120.7 32-32 75.4-50 120.7-50zm0 85.4c-22.6 0-44.3 9-60.3 25-16 16-25 37.7-25 60.3 0 22.6 9 44.3 25 60.3 16 16 37.7 25 60.3 25 22.6 0 44.3-9 60.3-25 16-16 25-37.7 25-60.3 0-22.6-9-44.3-25-60.3-16-16-37.7-25-60.3-25z"
          );
        document
          .querySelector("#icon-cloud-manager-normal path")
          .setAttribute(
            "d",
            "m213.3 444.4c0.8-64.7 24.2-127.1 66.1-176.3 41.9-49.3 99.7-82.4 163.4-93.6 63.7-11.1 129.3 0.4 185.5 32.5 56.2 32.1 99.3 82.8 122 143.4 59.7 16.4 111.5 54 145.6 105.7 34.1 51.6 48.4 113.9 40.2 175.3-8.3 61.4-38.5 117.7-85.1 158.5-46.6 40.8-106.4 63.3-168.3 63.4h-384c-49.1 0.1-96.6-16.8-134.7-47.7-38-30.9-64.3-74-74.3-122-10-48-3.2-98 19.3-141.6 22.5-43.5 59.4-78 104.3-97.6zm277.4-188.4c-27.1 0-53.8 5.7-78.4 16.7-24.7 11-46.8 27.2-64.8 47.3-18 20.1-31.5 43.8-39.8 69.6-8.2 25.7-10.9 52.9-7.9 79.7 0.6 5.2 0.2 10.4-1.1 15.4-1.2 5-3.4 9.7-6.3 13.9-3 4.3-6.7 8-10.9 10.9-4.3 2.9-9 5.1-14 6.3-30.2 7.8-56.5 26.2-74.1 52-17.5 25.7-25.1 56.9-21.2 87.8 3.8 30.9 18.7 59.4 42 80.1 23.3 20.7 53.3 32.2 84.5 32.3h384c42.8 0.1 84.2-16 115.7-45 31.6-29.1 51.1-68.9 54.6-111.6 3.5-42.8-9.2-85.3-35.5-119.1-26.4-33.8-64.6-56.4-106.9-63.4-4-0.6-8-1.9-11.7-3.7-3.7-1.8-7.1-4.1-10.2-6.8-3-2.8-5.6-5.9-7.8-9.4-2.1-3.5-3.8-7.3-4.8-11.3-5.5-20.2-14.3-39.4-26-56.8-11.7-17.4-26.1-32.7-42.8-45.4-16.6-12.7-35.2-22.7-55-29.4-19.9-6.7-40.7-10.1-61.6-10.1z"
          );
        document
          .querySelector("#icon-collaborate-active path")
          .setAttribute(
            "d",
            "m554.7 554.7c22.4 0 44.6 4.4 65.3 13 20.7 8.5 39.5 21.1 55.3 37 15.9 15.8 28.5 34.6 37 55.3 8.6 20.7 13 42.9 13 65.3v85.4c0 11.3-4.5 22.1-12.5 30.1-8 8-18.8 12.5-30.1 12.5-11.3 0-22.2-4.5-30.2-12.5-8-8-12.5-18.8-12.5-30.1v-85.4c0-11.2-2.2-22.3-6.5-32.6-4.3-10.4-10.6-19.8-18.5-27.7-7.9-7.9-17.3-14.2-27.7-18.5-10.3-4.3-21.4-6.5-32.6-6.5h-298.7c-11.2 0-22.3 2.2-32.7 6.5-10.3 4.3-19.7 10.6-27.6 18.5-8 7.9-14.2 17.3-18.5 27.7-4.3 10.3-6.5 21.4-6.5 32.6v85.4c0 11.3-4.5 22.1-12.5 30.1-8 8-18.9 12.5-30.2 12.5-11.3 0-22.2-4.5-30.2-12.5-8-8-12.5-18.8-12.5-30.1v-85.4c0-22.4 4.4-44.6 13-65.3 8.6-20.7 21.2-39.5 37-55.3 15.9-15.9 34.7-28.5 55.4-37 20.7-8.6 42.9-13 65.3-13zm256 0c16.8 0 33.5 3.3 49 9.7 15.5 6.4 29.6 15.9 41.5 27.8 11.9 11.8 21.3 26 27.8 41.5 6.4 15.5 9.7 32.2 9.7 49v85.3c0 11.3-4.5 22.2-12.5 30.2-8 8-18.9 12.5-30.2 12.5-11.3 0-22.1-4.5-30.1-12.5-8-8-12.5-18.9-12.5-30.2v-85.3c0-5.6-1.1-11.2-3.3-16.4-2.1-5.1-5.3-9.8-9.2-13.8-4-4-8.7-7.1-13.9-9.3-5.1-2.1-10.7-3.2-16.3-3.2h-60.4q-5.5-12.6-12.6-24.4-7.1-11.8-15.7-22.6-8.5-10.8-18.4-20.4-9.8-9.7-20.9-17.9zm-405.3-426.7c50.9 0 99.8 20.2 135.8 56.2 36 36 56.2 84.9 56.2 135.8 0 50.9-20.2 99.8-56.2 135.8-36 36-84.9 56.2-135.8 56.2-50.9 0-99.7-20.2-135.8-56.2-36-36-56.2-84.9-56.2-135.8 0-50.9 20.2-99.8 56.2-135.8 36.1-36 84.9-56.2 135.8-56.2zm362.7 128c33.9 0 66.5 13.5 90.5 37.5 24 24 37.5 56.6 37.5 90.5 0 33.9-13.5 66.5-37.5 90.5-24 24-56.6 37.5-90.5 37.5-34 0-66.5-13.5-90.5-37.5-24-24-37.5-56.6-37.5-90.5 0-33.9 13.5-66.5 37.5-90.5 24-24 56.5-37.5 90.5-37.5zm-362.7-42.7c-28.3 0-55.4 11.3-75.4 31.3-20 20-31.3 47.1-31.3 75.4 0 28.3 11.3 55.4 31.3 75.4 20 20 47.1 31.3 75.4 31.3 28.3 0 55.4-11.3 75.4-31.3 20-20 31.3-47.1 31.3-75.4 0-28.3-11.3-55.4-31.3-75.4-20-20-47.1-31.3-75.4-31.3zm362.7 128c-11.3 0-22.2 4.5-30.2 12.5-8 8-12.5 18.9-12.5 30.2 0 11.3 4.5 22.2 12.5 30.2 8 8 18.9 12.5 30.2 12.5 11.3 0 22.1-4.5 30.1-12.5 8-8 12.5-18.9 12.5-30.2 0-11.3-4.5-22.2-12.5-30.2-8-8-18.8-12.5-30.1-12.5z"
          );
        document
          .querySelector("#icon-share path")
          .setAttribute(
            "d",
            "m431.5 191.6c3.3-33.9 38.7-61.9 74.4-41.5 74.2 43.5 144.3 93.1 212.1 146 83.6 66.1 150.7 128.3 198.2 178 20.6 21.6 18.7 55.8-1 76.5q-17.6 18.2-35.8 36-18.2 17.7-36.8 34.9-18.7 17.3-37.8 34-19.1 16.7-38.7 32.8c-82.7 67.7-168.3 133.3-261.6 185.9-31.6 17.9-65.8-2.5-71.9-34.1l-0.8-4.9-9.7-152.4c-77.4 1.6-152.4 28.2-212.4 77.7l-11.3 9.5-5.5 4.4-10.5 8.2c-1.7 1.3-3.5 2.6-5.2 3.8l-9.8 6.8q-1.1 0.8-2.3 1.5-1.1 0.7-2.3 1.5-1.2 0.7-2.3 1.4-1.2 0.7-2.4 1.4l-8.8 4.7c-41.2 20.4-64 2.4-64-78.4 0-187.9 138.5-355.1 325.7-380.4l11-1.3zm81.5 62.8l-8.2 148.2c-0.2 2.5-0.7 5-1.7 7.3-1 2.3-2.4 4.4-4.2 6.2-1.7 1.8-3.7 3.3-6 4.5-2.3 1.1-4.7 1.8-7.2 2l-58.1 6.1c-130.7 15.6-234.5 117.8-253.7 251.5 15.8-11.7 32.5-22.3 49.9-31.7 17.4-9.4 35.4-17.6 53.9-24.5 18.5-6.9 37.4-12.5 56.7-16.7 19.3-4.3 38.9-7.2 58.5-8.7l17-1 72.7-1.5c2.7-0.1 5.5 0.4 8 1.4 2.6 0.9 4.9 2.4 6.9 4.2 2 1.9 3.7 4.1 4.8 6.6 1.2 2.5 1.9 5.2 2 7.9l8.5 153.4c68.3-43.5 133.5-93.7 199-147.2q15.8-13.1 31.3-26.6 15.6-13.5 30.8-27.4 15.3-13.8 30.2-28 14.9-14.2 29.5-28.7l-11-10.9-23.7-22.7q-16.1-15.1-32.5-29.8-16.4-14.8-33.1-29.1-16.7-14.4-33.8-28.4-17-14-34.3-27.6-18.4-14.5-37.1-28.6-18.7-14-37.7-27.6-19.1-13.6-38.4-26.7-19.4-13.2-39-25.9z"
          );
      }
    }

    // 生成不同级别的主题色
    let themeColorStyle = `
        :root {
            /* 亮色主题色 */
            --q-theme: ${colorLight(themeColor, 0.0)};
            --q-theme-2: ${colorLight(themeColor, 0.2)};
            --q-theme-3: ${colorLight(themeColor, 0.5)};
            --q-theme-4: ${colorLight(themeColor, 0.85)};
            --q-theme-5: ${colorLight(themeColor, 0.9)};
        }
        html.q-dark {
            /* 暗色主题色 */
            --q-theme: ${colorDark(themeColor, 0.0, 0)};
            --q-theme-2: ${colorDark(themeColor, 0.2, 0.12)};
            --q-theme-3: ${colorDark(themeColor, 0.5, 0.12)};
            --q-theme-4: ${colorDark(themeColor, 0.7, 0.12)};
            --q-theme-5: ${colorDark(themeColor, 0.8, 0.12)};
        }`;

    // 创建 style 标签，向页面添加自定义的主题颜色变量
    if (!document.getElementById("q-customTheme_color")) {
      let styleElement = document.createElement("style");
      styleElement.id = "q-customTheme_color";
      styleElement.innerHTML = themeColorStyle;
      document.body.appendChild(styleElement);
    } else {
      document.getElementById("q-customTheme_color").innerHTML =
        themeColorStyle;
    }

    // 控制栏开关移动到统一位置
  } else {
    if (!document.getElementById("q-customTheme_color")) return;
    document.getElementById("q-customTheme_color").remove();
    document.getElementById("q-customTheme_style").remove();
    document.getElementById("q-customTheme_cloudStyle").remove();
    const widgetStyle = document.getElementById("q-widget_style");
    if (widgetStyle) widgetStyle.remove();
  }
  document.documentElement.classList.toggle("betterco-hide-stage", hideStage);
  document.documentElement.classList.toggle("betterco-hide-ruler", hideRuler);
  const controlBar = document.querySelector(".Player_emulatorWrapper__yJUdU");
  if (controlBar) {
    controlBar.style.display = showControlBar ? "block" : "none";
  }
}

// 加载绕审核功能模块
async function loadBypassModule() {
    try {
        await import(chrome.runtime.getURL("theme/bypass.js"));
        if (typeof window.initBypassFeature === 'function') {
            await window.initBypassFeature();
        }
    } catch (e) {
        console.warn("加载绕审核模块失败:", e);
    }
}

// 等待页面加载完成后初始化
window.onload = async () => {
    updateTheme();
    initBetterCoSettings();
    initWidgetRemover();
    await loadBypassModule();
};

/**
 * 跟随系统切换主题
 * 使用媒体查询对象获取浏览器的主题，实现自动切换
 */
const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
colorSchemeQuery.addEventListener("change", handleColorSchemeChange);
// 媒体查询处理函数
async function handleColorSchemeChange(e) {
  const themeType = await get_storage("themeType");
  if (themeType == "auto") {
    document.documentElement.classList.toggle("q-dark", e.matches);
  }
}

function initBetterCoSettings() {
  if (document.getElementById("betterco-modal-style")) return;
  const link = document.createElement("link");
  link.id = "betterco-modal-style";
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL("theme/settings-modal.css");
  document.head.appendChild(link);
}

loadWidgetAssets();
injectIconSprite();

function ensureMenuItem() {
  const header = document.querySelector(".Header_menu__Zy7KP");
  if (!header) return;
  const menus = header.querySelectorAll(".coco-dropdown-overlay .coco-menu");
  if (menus.length < 3) return;
  const target = menus[2];
  if (target.querySelector(".betterco-settings-menu-item")) return;
  const item = document.createElement("div");
  item.className = "coco-menu-item betterco-settings-menu-item";
  const inner = document.createElement("div");
  inner.className = "Header_itemContent__1PHwD";
  inner.textContent = "Better Co 设置";
  item.appendChild(inner);
  item.addEventListener("click", openBetterCoModal);
  target.appendChild(item);
}

function openBetterCoModal() {
  createBetterCoModal();
  const mask = document.querySelector(".betterco-mask");
  const modal = document.querySelector(".betterco-modal");
  if (!mask || !modal) return;
  modal.getBoundingClientRect();
  requestAnimationFrame(() => {
    mask.classList.add("show");
    modal.classList.add("show");
  });
}

async function createBetterCoModal() {
  if (document.querySelector(".betterco-modal")) return;
  const mask = document.createElement("div");
  mask.className = "betterco-mask";
  const modal = document.createElement("div");
  modal.className = "betterco-modal";
  modal.innerHTML =
    '<div class="betterco-modal-header"><div class="betterco-header-left"><div class="betterco-title">Better Co 设置</div></div><div class="betterco-header-center"></div><div class="betterco-close">×</div></div><div class="betterco-modal-body"><div class="betterco-settings-content"></div></div>';
  document.body.appendChild(mask);
  document.body.appendChild(modal);
  const body = modal.querySelector(".betterco-settings-content");
  const headerLeft = modal.querySelector(".betterco-header-center");
  const tabs = document.createElement("q-tabs");
  tabs.setAttribute(
    "items",
    JSON.stringify([
      { key: "appearance", label: "外观", icon: "theme" },
      { key: "shortcut", label: "快捷键", icon: "keyboard_line" },
      { key: "about", label: "关于", icon: "about" },
    ])
  );
  tabs.setAttribute("value", "appearance");
  const section = document.createElement("div");
  const render = async (key) => {
    section.innerHTML = "";
    if (key === "appearance") {
      try {
        const response = await fetch(chrome.runtime.getURL("theme/settings-modal.html"));
        const html = await response.text();
        section.innerHTML = html;

        await ensureWidgetsReady();
        await new Promise(resolve => setTimeout(resolve, 50));

        const themeItems = section.querySelectorAll(".betterco-theme-selector .item");
        const colorItems = section.querySelectorAll(".betterco-color-selector .item");
        const enableSwitch = section.querySelector("#betterco-enableTheme");
        const barSwitch = section.querySelector("#betterco-showControlBar");
        const stageSwitch = section.querySelector("#betterco-hideStage");
        const rulerSwitch = section.querySelector("#betterco-hideRuler");
        const bypassSwitch = section.querySelector("#betterco-bypassJustClick");

        themeItems.forEach(item => {
          item.addEventListener("click", async () => {
            const type = item.dataset.type;
            await set_storage("themeType", type);
            updateTheme();
            updateSettingsUI();
          });
        });

        colorItems.forEach(item => {
          item.addEventListener("click", async () => {
            const color = item.dataset.color;
            await set_storage("themeColor", color);
            updateTheme();
            updateSettingsUI();
          });
        });

        if (enableSwitch) {
          enableSwitch.addEventListener("change", async function () {
            await set_storage("openTheme", this.checked);
            updateTheme();
            updateSettingsUI();
          });
        }

        if (barSwitch) {
          barSwitch.addEventListener("change", async function () {
            await set_storage("showControlBar", this.checked);
            updateTheme();
            updateSettingsUI();
          });
        }

        if (stageSwitch) {
          stageSwitch.addEventListener("change", async function () {
            await set_storage("hideStage", this.checked);
            updateTheme();
            updateSettingsUI();
          });
        }

        if (rulerSwitch) {
          rulerSwitch.addEventListener("change", async function () {
            await set_storage("hideRuler", this.checked);
            updateTheme();
            updateSettingsUI();
          });
        }

        if (bypassSwitch) {
          bypassSwitch.addEventListener("change", async function () {
            await set_storage("bypassJustClick", this.checked);
            updateSettingsUI();
            if (typeof window.initBypassFeature === 'function') {
              await loadBypassModule();
            }
          });
        }

        updateSettingsUI();
      } catch (e) {
        console.error("加载设置面板失败:", e);
        section.innerHTML = "<div>加载设置失败</div>";
      }
    } else if (key === "shortcut") {
      section.innerHTML = "<div>快捷键设置</div>";
    } else if (key === "about") {
      section.innerHTML = "<div>关于 Better Co</div>";
    }
  };
  tabs.addEventListener("change", (e) => render(e.detail.value));
  tabs.addEventListener("submenu", (e) => render(e.detail.value));
  headerLeft.appendChild(tabs);
  body.appendChild(section);
  render("appearance");
  const close = () => {
    modal.classList.remove("show");
    mask.classList.remove("show");
    setTimeout(() => {
      modal.remove();
      mask.remove();
    }, 200);
  };
  mask.addEventListener("click", close);
  modal.querySelector(".betterco-close").addEventListener("click", close);
}

// 首次尝试插入一次
ensureMenuItem();

// 监听页面结构变化，Header 渲染完成后自动插入菜单
const observer = new MutationObserver(() => ensureMenuItem());
observer.observe(document.body, { childList: true, subtree: true });


function loadWidgetAssets() {
  // 以 ES module 方式加载入口脚本，由 index.js 内部 import 其他 widget
  const url = chrome.runtime.getURL("widget/index.js");
  // 已经加载过则跳过
  if (document.querySelector(`script[src="${url}"]`)) return;
  const s = document.createElement("script");
  s.src = url;
  s.type = "module";
  document.head.appendChild(s);
}

function injectIconSprite() {
  if (document.getElementById("betterco-svg-sprite")) return;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", "betterco-svg-sprite");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.setAttribute("style", "position:absolute");
  svg.innerHTML = `
        <symbol id="icon-sun" viewBox="0 0 24 24"><path d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-8 3a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></path></symbol>
        <symbol id="icon-moon" viewBox="0 0 24 24"><path d="M12.477 4.546a1.01 1.01 0 0 1 1.097-1.409A9 9 0 0 1 12 21c-4.434 0-8.118-3.206-8.863-7.426a1.01 1.01 0 0 1 1.409-1.097 6 6 0 0 0 7.931-7.931m2.404 1.072a8 8 0 0 1-9.263 9.263A7.002 7.002 0 0 0 19 12.001a7.002 7.002 0 0 0-4.12-6.383ZM5.565 7.716l.064.14a3.26 3.26 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.071.071 0 0 1-.13 0l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059A3.26 3.26 0 0 0 5.37 7.855l.064-.14a.071.071 0 0 1 .13 0Zm2.832-4.859c.04-.09.166-.09.206 0l.102.222a5.189 5.189 0 0 0 1.97 2.172l.157.092a.108.108 0 0 1 0 .189l-.158.092a5.189 5.189 0 0 0-2.07 2.394.113.113 0 0 1-.207 0l-.102-.222a5.189 5.189 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1 0-.189l.158-.092a5.189 5.189 0 0 0 1.97-2.172z"></path></symbol>
        <symbol id="icon-auto" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 11.876-7H12a1 1 0 1 0 0 2h6c.077 0 .153-.009.225-.025.26.322.496.664.705 1.025H12a1 1 0 1 0 0 2h7.748c.084.326.148.66.19 1H12a1 1 0 1 0 0 2h7.938a7.88 7.88 0 0 1-.19 1H12a1 1 0 1 0 0 2h6.93a8.01 8.01 0 0 1-.705 1.025A1.004 1.004 0 0 0 18 17h-6a1 1 0 1 0 0 2h3.876A8 8 0 0 1 4 12m18 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"></path></symbol>
        <symbol id="icon-color" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10 0 .649-.062 1.284-.18 1.9-.386 2.004-2.397 2.85-4.082 2.57l-1.74-.29a1.29 1.29 0 0 0-1.124.36c-.37.37-.547.879-.298 1.376.423.846.429 1.812.055 2.603C14.131 21.58 13.11 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16l.195-.002c.258-.01.5-.06.628-.332a.993.993 0 0 0-.036-.855c-.63-1.262-.302-2.71.673-3.685a3.29 3.29 0 0 1 2.867-.919l1.74.29c.957.16 1.668-.348 1.789-.975A8 8 0 0 0 12 4m-4.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"></path></symbol>
        <symbol id="icon-chevron-down" viewBox="0 0 24 24"><path d="M7 10h10l-5 5z"></path></symbol>
        <symbol id="icon-theme" viewBox="0 0 24 24"><title>Theme</title><g id="t_shirt_line" fill='none' fill-rule='evenodd'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.17.43-.003-.012-.01-.01z'/><path fill='currentColor' d='M7.121 5.293 3.414 9l1.478 1.478.788-1.052c.598-.797 1.867-.339 1.817.657l-.393 7.867A1 1 0 0 0 8.102 19h7.796a1 1 0 0 0 .998-1.05l-.393-7.867c-.05-.996 1.219-1.454 1.817-.657l.788 1.052L20.586 9l-3.707-3.707C16.5 4.915 15.95 5 15.465 5A3.998 3.998 0 0 1 12 7a3.998 3.998 0 0 1-3.465-2c-.486 0-1.036-.085-1.414.293M5.707 3.879A3 3 0 0 1 7.828 3H9.1c.472 0 .872.297 1.03.71a2.001 2.001 0 0 0 3.74 0c.158-.413.558-.71 1.03-.71h1.272a3 3 0 0 1 2.12.879L22 7.586a2 2 0 0 1 0 2.828l-1.478 1.478c-.52.52-1.246.689-1.9.526l.272 5.432A3 3 0 0 1 15.898 21H8.102a3 3 0 0 1-2.996-3.15l.272-5.432a1.996 1.996 0 0 1-1.9-.526L2 10.414a2 2 0 0 1 0-2.828z'/></symbol>
        <symbol id="icon-keyboard" viewBox="0 0 24 24"><path d="M3 6h18v12H3z"></path><path d="M6 9h2v2H6zM10 9h2v2h-2zM14 9h2v2h-2zM6 13h2v2H6zM10 13h8v2h-8z"></path></symbol>
        <symbol id="icon-info" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path><path d="M11 10h2v6h-2zM11 7h2v2h-2z"></path></symbol>
    `;
  document.body.appendChild(svg);
}

function ensureWidgetsReady() {
  if (!window.customElements || !window.customElements.whenDefined)
    return Promise.resolve();
  return Promise.all([
    window.customElements.whenDefined("q-switch"),
    window.customElements.whenDefined("q-tabs"),
    window.customElements.whenDefined("q-icon"),
  ]);
}

// 添加屏幕拖动和缩放功能
// let scale = 0.9
// let posX = 0
// let posY = 0
// let isDragging = false
// let startX, startY, currentX, currentY

// const container = document.querySelector('.PreviewArea_stage__38aST')
// const dragDiv = document.querySelector('.PreviewArea_appZone__2q22j')
// dragDiv.style.transformOrigin = '0 0'

// // 初始化div位置居中
// function initPosition() {
//     const containerRect = container.getBoundingClientRect()
//     const divRect = dragDiv.getBoundingClientRect()
//     posX = (containerRect.width - divRect.width) / 2
//     posY = (containerRect.height - divRect.height) / 2
//     applyTransform()
// }

// // 容器加载完成后初始化
// window.addEventListener('DOMContentLoaded', initPosition)

// // 滚轮缩放事件
// container.addEventListener('wheel', function(e) {
//     e.preventDefault();
//     const delta = e.deltaY > 0 ? -0.1 : 0.1;
//     const newScale = Math.min(Math.max(scale + delta, 0.5), 3);

//     if (newScale !== scale) {
//         const rect = container.getBoundingClientRect();
//         const mouseX = e.clientX - rect.left - posX;
//         const mouseY = e.clientY - rect.top - posY;

//         const ratio = newScale / scale;
//         posX -= mouseX * (ratio - 1);
//         posY -= mouseY * (ratio - 1);

//         scale = newScale;
//         applyTransform();
//     }
// });

// // 拖拽事件
// dragDiv.addEventListener('mousedown', function(e) {
//     isDragging = true;
//     startX = e.clientX;
//     startY = e.clientY;
//     currentX = posX;
//     currentY = posY;
//     document.addEventListener('mousemove', drag);
//     document.addEventListener('mouseup', stopDrag);
//     document.addEventListener('mouseleave', stopDrag);
// });

// function drag(e) {
//     if (!isDragging) return;
//     e.preventDefault();
//     const dx = e.clientX - startX;
//     const dy = e.clientY - startY;
//     posX = currentX + dx;
//     posY = currentY + dy;
//     applyTransform();
// }

// function stopDrag() {
//     isDragging = false;
//     document.removeEventListener('mousemove', drag);
//     document.removeEventListener('mouseup', stopDrag);
//     document.removeEventListener('mouseleave', stopDrag);
// }

// // 应用变换
// function applyTransform() {
//     dragDiv.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
// }

/**
 * 生成不同级别的亮色颜色
 * @param {string} hex - 十六进制颜色值
 * @param {number} brightness - 亮度调整值，范围在0到1之间，数值越大越亮
 */
function colorLight(hex, brightness) {
  let [r, g, b] = hexToRgb(hex);

  r = Math.min(255, Math.round(r + (255 - r) * brightness));
  g = Math.min(255, Math.round(g + (255 - g) * brightness));
  b = Math.min(255, Math.round(b + (255 - b) * brightness));

  return rgbToHex(r, g, b);
}

/**
 * 生成不同级别的暗色颜色
 * @param {string} hex - 十六进制颜色值
 * @param {number} brightness - 亮度调整值，范围在0到1之间，数值越大越暗
 * @param {number} saturation - 饱和度调整值，范围在0到1之间，数值越大越饱和
 */
function colorDark(hex, brightness, saturation) {
  let [r, g, b] = hexToRgb(hex);

  r = Math.round(r * (1 - brightness) + (255 - r) * saturation);
  g = Math.round(g * (1 - brightness) + (255 - g) * saturation);
  b = Math.round(b * (1 - brightness) + (255 - b) * saturation);

  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  return rgbToHex(r, g, b);
}

// 把 RGB 颜色转换为十六进制颜色
function rgbToHex(r, g, b) {
  const toHex = (value) => {
    return value.toString(16).padStart(2, "0");
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// 把十六进制颜色转换为 RGB 颜色
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  return [r, g, b];
}

/**
 * 修改网页图标（favicon）
 * @param {string} iconUrl - 图标 URL，如果为空则恢复默认
 */
function updateFavicon(iconUrl) {
  // 移除现有的 favicon
  const existingLinks = document.querySelectorAll('link[rel*="icon"]');
  existingLinks.forEach(link => link.remove());

  if (iconUrl && iconUrl.trim()) {
    // 创建新的 favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = iconUrl;
    document.head.appendChild(link);

    // 同时添加 apple-touch-icon（用于移动设备）
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = iconUrl;
    document.head.appendChild(appleLink);

    console.log('BetterCo: 已更新网页图标:', iconUrl);
  } else {
    // 恢复默认图标（使用页面原有的或创建一个默认的）
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'icon';
    defaultLink.type = 'image/x-icon';
    defaultLink.href = '/favicon.ico';
    document.head.appendChild(defaultLink);

    console.log('BetterCo: 已恢复默认网页图标');
  }
}

/**
 * 初始化控件移除器
 */
function initWidgetRemover() {
  // 只在编辑器页面加载
  if (
    !window.location.pathname.startsWith("/editor") ||
    window.location.pathname.includes("player")
  ) {
    return;
  }

  // 先加载自定义弹窗组件
  if (!window.BetterCoDialog) {
    const dialogScript = document.createElement("script");
    dialogScript.src = chrome.runtime.getURL("theme/custom-dialog.js");
    dialogScript.onload = function () {
      this.remove();
      loadWidgetRemoverScript();
    };
    dialogScript.onerror = function () {
      console.error("加载自定义弹窗组件失败");
      this.remove();
    };
    (document.head || document.documentElement).appendChild(dialogScript);
    return;
  }

  loadWidgetRemoverScript();
}

function loadWidgetRemoverScript() {
  // 加载控件移除器脚本
  if (window.__betterco_widget_remover_loaded) {
    return;
  }

  // 直接使用chrome-extension:// URL加载脚本，符合CSP策略
  // 脚本文件已包含exports定义
  const scriptUrl = chrome.runtime.getURL("theme/widget-remover-core.js");

  const script = document.createElement("script");
  script.src = scriptUrl;
  script.onload = function () {
    this.remove();
    // 等待脚本执行完成后，强制覆盖 Q.default
    setTimeout(() => {
      if (window.__betterco_setup_dialog) {
        window.__betterco_setup_dialog();
      } else if (window.BetterCoDialog && window.Q) {
        window.Q.default = window.BetterCoDialog.default.bind(
          window.BetterCoDialog
        );
        console.log("BetterCo: 已覆盖 Q.default 使用自定义弹窗");
      }
    }, 100);
    window.__betterco_widget_remover_loaded = true;
    console.log("控件移除器已加载");
  };
  script.onerror = function () {
    // 如果英文文件加载失败，尝试中文文件名
    console.warn("英文文件名加载失败，尝试中文文件名...");
    const fallbackScript = document.createElement("script");
    fallbackScript.src = chrome.runtime.getURL("控件移除器.js");
    fallbackScript.onload = function () {
      this.remove();
      // 等待脚本执行完成后，强制覆盖 Q.default
      setTimeout(() => {
        if (window.__betterco_setup_dialog) {
          window.__betterco_setup_dialog();
        } else if (window.BetterCoDialog && window.Q) {
          window.Q.default = window.BetterCoDialog.default.bind(
            window.BetterCoDialog
          );
          console.log("BetterCo: 已覆盖 Q.default 使用自定义弹窗");
        }
      }, 100);
      window.__betterco_widget_remover_loaded = true;
      console.log("控件移除器已加载（使用中文文件名）");
    };
    fallbackScript.onerror = function () {
      console.error("加载控件移除器脚本失败（所有尝试都失败）");
      this.remove();
    };
    (document.head || document.documentElement).appendChild(fallbackScript);
    this.remove();
  };
  (document.head || document.documentElement).appendChild(script);
}


