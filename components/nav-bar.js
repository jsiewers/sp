import {LitElement, html, css} from 'lit-element';


class NavBar extends LitElement {
   static get styles() {
        return css`
            :host() {
                display:block;
            }
            nav {
                 background-color:var(--c3);
            }

           div#content {
                display: flex;
                justify-content: space-between;
                width:80%;
                margin:auto;
                max-width:1090px;
           }

            div#brand {
                align-self:flex-start;
                width:130px;
                height:50px;
                background-image: url("/img/layout/edutorial-orange-white.svg");
                background-repeat: no-repeat;
                background-size: contain;
                background-position-y: 17px;
            }

            div#menu {
               align-self: flex-end;
               margin-top:17px;
               margin-bottom:17px
            }


        `;
    }

    render() {
        return html`
            <nav>
                <div id="content">
                    <a href="/"><div id="brand"></div></a>
                    <div id="menu">
                        <slot>link</slot>
                      
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);
