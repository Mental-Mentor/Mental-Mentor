class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div> This is Footer</div>`
    }
}

customElements.define('footer-component', Header);