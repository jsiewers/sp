import { LitElement, html} from 'lit-element';
import Fontawesome from 'lit-fontawesome';

class FaIcon extends LitElement {
  static get properties() {
    return {
      class: {
        attribute: true,
        type: String
      },
      size: {
        attribute: true,
        type: String
      }
    }
  }
 static get styles() {
    return [ Fontawesome ];
 }
 render() {
    return html`
         <span style="font-size: ${ this.size }"><i class="${ this.class }"></i></span>
    `;
  }
}

customElements.define('fa-icon', FaIcon );
