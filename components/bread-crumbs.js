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
            a {
              color: black;
              text-decoration:none;
            }
          `
        ]
      }

    createBreadCrumps(loc) {
      let counter = 0;
      let p = "";
      let parts = [];
      parts.push( html `<a href="/">home</a> | ` );
      this.loc.split("/").forEach(path => {
          counter++;
          console.log(path);
          if(counter > 3) {
            p += (path + "/");
            parts.push(html `<a href="/${p.slice(0,-1)}">${path}</a> | `);
            //parts.push("<a href=/'" + p.slice(0,-1) + "'>" + path + "</a> | ");
          }
      });
      return parts;
    }

    render() {
        return this.createBreadCrumps("http://courses/html/browsers/");
    }
}
customElements.define('bread-crumbs', BreadCrumbs);
