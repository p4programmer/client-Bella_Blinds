class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
        <div>
    
        </div>
 `;
    }
}
window.customElements.define('eader-section', Header);