class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div> 
     
      </div>`
    }
}

customElements.define('header-component', Header);