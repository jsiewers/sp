import {LitElement, html, css, unsafeCSS} from 'lit-element';
import { mainStyles } from '../styles/main-styles.js';

class BreadCrumbs extends LitElement {
  static get properties() {
      return {
          loc: {
            attribute: true
          }
      }
    };

    static get styles() {
        return [
          mainStyles,
          css`
            div {
              margin-top:1rem;
            }

            a {
              color: black;
              font-weight:300;
              text-decoration:none;
              color: var(--c3);
            }

            fa-icon {
              padding-block-start:2px;
              vertical-align:top;
              color: var(--c3);
            }
          `
        ]
      }

    createBreadCrumps(loc) {
      let counter = 0;
      let p = "";
      let parts = [html `<div>`];
      parts.push( html `<a href="/">home</a> <fa-icon class="fas fa-angle-right"> ` );
      this.loc.split("/").forEach(path => {
          counter++;
          if(counter > 3) {
            p += (path + "/");
            parts.push(html `<a href="/${p.slice(0,-1)}">${path}</a><fa-icon class="fas fa-angle-right">`);
          }
      });
      parts.push(html `</div>`)
      return parts;
    }

    render() {
        return this.createBreadCrumps("http://courses/html/browsers/");
    }
}
customElements.define('bread-crumbs', BreadCrumbs);
