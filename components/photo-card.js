import { LitElement, html, css } from 'lit-element';

class PhotoCard extends LitElement {
    static get properties() {
        return {
          learningpath: {
            attribute:true
          },
          img: {
              attribute: true
          },
          href: {
              attribute: true
          },
        };
    }

    static get styles() {
        return css `

            #card {
              box-sizing: border-box;
              border-radius:16px;
              box-shadow: 3px 3px 5px 1px #cccbca;
              color:var(--c4);
              background-color:var(--c7);
              min-height:300px;
            }


            #photo {
              box-sizing: border-box;
              padding:1rem;
              padding-bottom:0px;
              border-top-left-radius:16px;
              border-top-right-radius:16px;
              background-repeat: no-repeat;
              background-size:700px;
              background-position: top;
              width:100%;
              height:230px;

            }

            p {
              padding:1rem;
              padding-top:0px;
            }

            #title {
              padding:0px;
              font-weight:700;
              font-size:1.2rem;
              color:#fff;
            }

            a {
                color:var(--c4);
                text-decoration: none;
            }

            ::slotted(a) {
                color: #fff;
             }

            #link {
                 text-align:right;
            }
    `
    };

    render() {
        return html `
          <div id="card">
            <div id="photo" style="background-image: url('../../img/frontpage/${ this.learningpath }.svg');background-color:var(--c-${ this.learningpath });">
              <a href="/learningpath/${ this.learningpath }">
                <div style="height:150px"></div>
                <p id="title">
                  <slot name="title">title</slot>
                </p>
              </a>
            </div>
            <p><slot name="text">text</slot></p>
          </div>

        `;
    }
}
customElements.define('photo-card', PhotoCard);
