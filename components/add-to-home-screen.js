import {LitElement, html, css} from 'lit-element';
class AddToHomeScreen extends LitElement {
    static get properties() {
      return {
        img: { type: String },
        hidePrompt: { type: Function }
      }
    }
    constructor() {
      super();
      console.log("in addToHomeScreen");
      this.img = "../img/android/edutorial-icon-192.png";
      this.hidePrompt = (e) => {
        console.log("Hide that prompt")
        console.log(this);
        this.style.display = "none";
        //document.querySelector("add-to-home-screen").style.display = "none";
        e.preventDefault()
      }
      this.bla = this.hidePrompt.bind(this)
    }
    static get styles() {

        return css`
            #addToHomeScreen {
              position:fixed;
              display:flex;
              justify-content:flex-end;
              border-radius:8px;
              bottom:0px;
              left:0px;
              background-color:var(--c1);
              text-align:right;
              padding:1rem;
            }

            div {
              margin-right:1rem;
            }

            a {
              text-decoration:none;
              font-weight:500;
              color: var(--c4);
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







     installApp(e) {
       console.log("Install that app!");
       console.log(e.bubbles);
       e.preventDefault();
     }

  render() {
    return html`
      <div id="addToHomeScreen">
        <div>
          <img src="${ this.img }" alt="Edutorial logo">
        </div>
        <div>
          Add app to your home screen<br />
          <button style="float:left;" @click="${this.bla}">No thanks</button>
          <button style="float:right;" @click="${this.installApp}">Yes please</button>
        </div>
      </div>
    `;
  }

        // return html`
        //   <div id="addToHomeScreen">
        //     <img src="${ this.img }" alt="Edutorial logo">
        //     <h3>Add app to your home screen</h3>
        //     <a href="javascript:void(0) @click="${this._hidePrompt()}">No thanks</a>
        //     <a href="" @click="${this._installApp()}">Yes, please</a>
        //     <button @click="${this._installApp()}"></button></h1>
        //     <h1><slot name="test"></slot></h1>
        //   </div>
        // `;

}
customElements.define('add-to-home-screen', AddToHomeScreen);
