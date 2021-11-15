class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div> This is Header
     
      </div>`
    }
}

customElements.define('header-component', Header);