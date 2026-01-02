class QTabs extends HTMLElement {
    constructor() {
        super()
        this._items = []
        this._value = null
        this._initialized = false
    }

    static get observedAttributes() {
        return ['items','value']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return
        if (name === 'items') {
            try { this._items = JSON.parse(newValue || '[]') } catch { this._items = [] }
            if (this._initialized) this.render()
        } else if (name === 'value') {
            this._value = newValue
            if (this._initialized) this._applyActive()
        }
    }

    connectedCallback() {
        if (!this._initialized) {
            if (this.hasAttribute('items')) {
                try { this._items = JSON.parse(this.getAttribute('items') || '[]') } catch { this._items = [] }
            }
            if (this.hasAttribute('value')) this._value = this.getAttribute('value')
            this.render()
            document.addEventListener('click', this._handleOutsideClick.bind(this))
            this._initialized = true
        }
    }

    disconnectedCallback() {
        document.removeEventListener('click', this._handleOutsideClick)
    }

    setItems(items) {
        this._items = Array.isArray(items) ? items : []
        this.render()
    }

    setValue(value) {
        this._value = value
        this._applyActive()
    }

    _handleOutsideClick(e) {
        if (!this.contains(e.target)) this._closeAllSubmenus()
    }

    _closeAllSubmenus() {
        this.querySelectorAll('.q-submenu').forEach(el => el.classList.remove('show'))
        this.querySelectorAll('.q-tab-arrow').forEach(el => el.classList.remove('q-rotated'))
    }

    _applyActive() {
        this.querySelectorAll('.q-tab').forEach(tab => {
            const k = tab.getAttribute('data-key')
            tab.classList.toggle('q-active', !!this._value && this._value === k)
        })
    }

    _onTabClick(tab, item) {
        const submenu = tab.querySelector('.q-submenu')
        const arrow = tab.querySelector('.q-tab-arrow')
        if (submenu && item.submenu && item.submenu.length) {
            const isShow = submenu.classList.contains('show')
            this._closeAllSubmenus()
            if (!isShow) {
                submenu.classList.add('show')
                if (arrow) arrow.classList.add('q-rotated')
            }
            return
        }
        this._value = item.key || item.label
        this._applyActive()
        this.dispatchEvent(new CustomEvent('change', { detail: { value: this._value } }))
    }

    _onSubItemClick(parent, sub) {
        this._closeAllSubmenus()
        this.dispatchEvent(new CustomEvent('submenu', { detail: { parent: parent.key || parent.label, value: sub.key || sub.label } }))
    }

    render() {
        const items = Array.isArray(this._items) ? this._items : []
        this.innerHTML = ''
        const container = document.createElement('div')
        container.className = 'q-tabs'
        items.forEach(item => {
            const tab = document.createElement('div')
            tab.className = 'q-tab'
            tab.setAttribute('data-key', item.key || item.label || '')
            const content = document.createElement('div')
            content.className = 'q-tab-content'
            if (item.icon) {
                const icon = document.createElement('q-icon')
                icon.setAttribute('name', item.icon)
                icon.setAttribute('size', '1.1em')
                content.appendChild(icon)
            }
            const label = document.createElement('span')
            label.className = 'q-tab-label'
            label.textContent = item.label || ''
            content.appendChild(label)
            if (item.submenu && item.submenu.length) {
                const arrow = document.createElement('q-icon')
                arrow.className = 'q-tab-arrow'
                arrow.setAttribute('name', 'chevron-down')
                arrow.setAttribute('size', '1em')
                content.appendChild(arrow)
            }
            tab.appendChild(content)
            if (item.submenu && item.submenu.length) {
                const menu = document.createElement('div')
                menu.className = 'q-submenu'
                item.submenu.forEach(sub => {
                    const mi = document.createElement('div')
                    mi.className = 'q-submenu-item'
                    if (sub.icon) {
                        const si = document.createElement('q-icon')
                        si.setAttribute('name', sub.icon)
                        si.setAttribute('size', '1em')
                        mi.appendChild(si)
                    }
                    const st = document.createElement('span')
                    st.textContent = sub.label || ''
                    mi.appendChild(st)
                    mi.addEventListener('click', e => {
                        e.stopPropagation()
                        this._onSubItemClick(item, sub)
                    })
                    menu.appendChild(mi)
                })
                tab.appendChild(menu)
            }
            tab.addEventListener('click', () => this._onTabClick(tab, item))
            container.appendChild(tab)
        })
        this.appendChild(container)
        this._applyActive()
    }
}

customElements.define('q-tabs', QTabs)