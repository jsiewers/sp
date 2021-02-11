import {LitElement, html, css} from 'lit-element';


class NavBar extends LitElement {
    static get styles() {
        return css` 
        <style>
            :host() {
                display:block;
            }
            
            nav {
                 background-color:var(--c4);
            }
           
           div#content {
                display: flex;
                justify-content: space-between;
                width:80%;
                margin:auto;        
           }
            
            div#brand {
                align-self:flex-start;
                width:130px;
                height:40px;
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
                                             
        </style>
          
        `;
    }

    render() {
        return html`
            <nav>
                <div id="content">
                    <div id="brand">
                        <slot name="brand"></slot>
                    </div>
                    <div id="menu">
                        <slot name="link"><a href="#">Geen link</a></slot>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);
