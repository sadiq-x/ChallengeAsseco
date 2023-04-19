import './body/scriptpage1.js';
import './body/scriptpage2.js';
class SiteMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render()
    }

    connectedCallback() {
        const scriptpage1 = document.createElement('page-one')
        const scriptpage2 = document.createElement('page-two')
        const divwork = this.shadowRoot.querySelector("#divwork")
        this.loadScriptPage(divwork, scriptpage1, scriptpage2)
    }

    loadScriptPage(divwork, pageone, pagetwo) {
        divwork.append(pageone)
        const btnconfirm = pageone.shadowRoot.querySelector("#btnns")
        btnconfirm.addEventListener("click", () => {
            if (pageone.status) {
                divwork.removeChild(divwork.lastChild)
                divwork.append(pagetwo)
            }
        })
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <div id="divwork"> </div>
        ${this.getStyles()}
        `
    }

    getStyles() {
        return `
        <style> </style>
        `
    }
}

customElements.define("site-body", SiteMain);