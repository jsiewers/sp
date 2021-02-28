import {LitElement, html, css} from 'lit-element';
class AddToHomeScreen extends LitElement {
    static get properties() {
      return {
        img: { type: String },
      }
    }
    constructor() {
      super();
      this.img = "../img/android/edutorial-icon-192.png";
    }

    static get styles() {

        return css`
            #addToHomeScreen {
              position:fixed;
              display:flex;
              justify-content:flex-end;
              border-radius:8px;
              bottom:0px;
              left:2rem;
              background-color:var(--c1);
              text-align:right;
              padding:1rem;
            }

            div {
              margin-right:1rem;
            }

            p {
              margin-block-start: 0rem;
              margin-block-end: 0.5rem;
            }

            a {
              text-decoration:none;
              font-weight:500;
              color: var(--c4);
              background-color:var(--c3);
              color: var(--c1);
              font-weight:300;
              font-size:0.8rem;
              border:none;
              border-radius:4px;
              padding:5px;
              padding-top:3px;
              padding-bottom:3px;
            }


            img {
              height:50px;
              vertical-align:bottom;
            }

            h1 {
              font-size:4rem;
            }
       `
     };

  render() {
    return html`
      <div id="addToHomeScreen">
        <div>
          <img src="${ this.img }" alt="Edutorial logo">
        </div>
        <div>
          <p>Add app to your home screen?</p>
          <slot name="links"></slot>
        </div>
      </div>
    `;
  }
}
customElements.define('add-to-home-screen', AddToHomeScreen);
