import { html } from 'lit-element';
import { BaseView } from './base-view.js';

class TestView extends BaseView {
    render() {
        return html`
      <h1>Test View</h1>
    `;
    }
}
customElements.define('test-view', TestView);