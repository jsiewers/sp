import { LitElement, html } from 'lit-element';
class IndexView extends LitElement {
    render() {
        return html`
      <h1>Index View</h1>
        `;
    }
}
customElements.define('index-view', IndexView);
