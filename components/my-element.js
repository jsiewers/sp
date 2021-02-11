import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {

    static get properties() {
        return {
            prop1: {attribute: true}
        };
    }

    render() {
        return html`
      <slot></slot>
      <div><slot name="hi">${this.prop1}</slot></div>
    `;
    }
}
customElements.define('my-element', MyElement);