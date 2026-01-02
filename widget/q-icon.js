/**
 * 图标组件
 * @param name - 图标名称或本地SVG路径
 * @param size - 图标大小
 */
class QIcon extends HTMLElement {
    constructor() {
        super()
        this._localCache = new Map()

        this._inlineIcons = new Map([
            ['keyboard_line', `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='currentColor' d='M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6a2 2 0 0 1 1.85-1.995L4 4zm0 2H4v12h16zm-3 8a1 1 0 0 1 .117 1.993L17 16H7a1 1 0 0 1-.117-1.993L7 14zm-9-3a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm4.5 0a1 1 0 0 1 .117 1.993L12.5 13h-1a1 1 0 0 1-.117-1.993L11.5 11zm4.5 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM8 8a1 1 0 0 1 .117 1.993L8 10H7a1 1 0 0 1-.117-1.993L7 8zm4.5 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM17 8a1 1 0 0 1 .117 1.993L17 10h-1a1 1 0 0 1-.117-1.993L16 8z'/></g></svg>`],
            ['about', `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='currentColor' d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-.01 6c.558 0 1.01.452 1.01 1.01v5.124A1 1 0 0 1 12.5 18h-.49A1.01 1.01 0 0 1 11 16.99V12a1 1 0 1 1 0-2zM12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2'/></g></svg>`]
        ])
    }

    connectedCallback() {
        this.render()
    }

    disconnectedCallback() {

    }

    static get observedAttributes() {
        return ['name', 'size'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render()
        }
    }

    async render() {
        let iconName = this.getAttribute('name') || 'empty'
        let iconSize = this.getAttribute('size') || '1.5em'

        this.innerHTML = ''

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        svg.setAttribute('width', iconSize)
        svg.setAttribute('height', iconSize)

        if (this._inlineIcons.has(iconName)) {
            const parser = new DOMParser()
            const doc = parser.parseFromString(this._inlineIcons.get(iconName), 'image/svg+xml')
            const importedSvg = doc.querySelector('svg')
            if (importedSvg) {
                importedSvg.setAttribute('width', iconSize)
                importedSvg.setAttribute('height', iconSize)
                this.appendChild(importedSvg)
                return
            }
        }

        if (iconName.startsWith('/') || iconName.startsWith('http') || iconName.includes('/')) {
            try {
                const getURL = chrome?.runtime?.getURL || ((url) => url)

                if (!this._localCache.has(iconName)) {
                    const response = await fetch(getURL(iconName))
                    if (response.ok) {
                        const svgText = await response.text()
                        this._localCache.set(iconName, svgText)
                    }
                }

                const cachedSvg = this._localCache.get(iconName)
                if (cachedSvg) {
                    const parser = new DOMParser()
                    const doc = parser.parseFromString(cachedSvg, 'image/svg+xml')
                    const importedSvg = doc.querySelector('svg')
                    if (importedSvg) {
                        importedSvg.setAttribute('width', iconSize)
                        importedSvg.setAttribute('height', iconSize)
                        this.appendChild(importedSvg)
                        return
                    }
                }
            } catch (e) {
                console.warn('加载本地SVG失败:', iconName, e)
            }
        }

        const use = document.createElementNS("http://www.w3.org/2000/svg", "use")
        use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#icon-${iconName}`)
        svg.appendChild(use)
        this.appendChild(svg)
    }
}

customElements.define('q-icon', QIcon)