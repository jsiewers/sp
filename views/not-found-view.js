import { LitElement, html } from 'lit-element';
class NotFoundView extends LitElement {
    render() {
        return html`
            <style>
                h1 {
                    color: green;
                }
                
            </style>
      <h1>Not found!</h1>
    `;
    }
}
customElements.define('not-found-view', NotFoundView);