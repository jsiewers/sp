import {
    LitElement,
    html,
    css
} from 'lit-element';
class CardElement extends LitElement {
    static get properties() {
        return {
            href: {
                attribute: true
            },
        };
    }

    static get styles() {
        return css ` 
         
            #card {
                border-radius:16px;
                padding:1rem;
                box-shadow: 3px 3px 5px 1px #cccbca;
                background-color:var(--c7);
                color:var(--c4);
            }
  
            #title {
                font-weight:700;
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
                <p id="title"><slot name="title">title</slot></p>
                <p><slot name="text">text</slot></p>
                <div id="link"><a href="${ this.href }"><slot name="link">link</slot></a></div>
            </div>
        `;
    }
}
customElements.define('card-element', CardElement);