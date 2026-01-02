/**
 * 开关组件
 * @param name - 属性名称
 */
class QSwitch extends HTMLElement {

    #inputElement

    constructor() {
        super()
        this.checked = false        // 开关状态
        this.#inputElement = null   // 输入框元素
    }

    // 元素插入到DOM中时调用
    connectedCallback() {
        if (!this.#inputElement) {
            this.#render()
            this.#inputElement = this.querySelector('input')
            this.#inputElement.addEventListener('change', this.#switchChange.bind(this))
            this.querySelector('.q-switch-label').addEventListener('click', () => {
                setTimeout(() => this.#switchChange({ stopPropagation: () => {} }), 10);
            });
            if (this._pendingChecked !== undefined) {
                this.checked = this._pendingChecked;
                this.#inputElement.checked = this._pendingChecked;
                delete this._pendingChecked;
            }
        }
    }

    // 元素从DOM中移除时调用
    disconnectedCallback() {
        if (this.#inputElement) {
            this.#inputElement.removeEventListener('change', this.#switchChange)
        }
    }

    // 事件：开关改变
    #switchChange(event) {
        event.stopPropagation()
        if (this.checked !== this.#inputElement.checked) {
            this.checked = this.#inputElement.checked
            this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }))
        }
    }

    // 方法：设置开关状态
    setChecked(checked) {
        if (this.checked !== checked) {
            this.checked = checked;
            if (this.#inputElement) {
                this.#inputElement.checked = checked;
            } else {
                this._pendingChecked = checked;
            }
        }
    }

    // 渲染元素
    #render() {
        this.innerHTML = `
            <label class="q-switch-label">
                <input type="checkbox">
                <div class="track">
                    <div class="thumb"></div>
                </div>
            </label>
        `;
    }
}

// 注册自定义元素
customElements.define('q-switch', QSwitch)