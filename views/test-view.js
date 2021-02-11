import { LitElement, html } from 'lit-element';

class TestView extends LitElement {
    render() {
        return html`
      <h1>Test View</h1>
    `;
    }
}
customElements.define('test-view', TestView);