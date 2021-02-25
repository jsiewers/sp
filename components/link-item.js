import {
    LitElement,
    html,
    css
} from 'lit-element';

class LinkItem extends LitElement {
    static get properties() {
      return {
        href: { type: String }
      }
    }
     static get styles() {
        return css `
        div#list {
            display:grid;
            margin-bottom:0.5rem;
            grid-gap:1rem;
            grid-template-columns: 0.8rem auto;
        }


        div#icon {
            color:var(--c1);
        }

        a {
          color:var(--c4);
          text-decoration:none;
          font-width:500;
        }

    `
    };

    render() {
        return html `
            <div id="list">
                <div id="icon">
                  <fa-icon size="0.8rem" style="padding:0px;height:23px;vertical-align:top;" class="fas fa-angle-right"></fa-icon>
                </div>
                <div>
                  <a href="${ this.href }"><slot name="link"></slot></a>
                </div>
            </div>
        `;
    }
}
customElements.define('link-item', LinkItem);
