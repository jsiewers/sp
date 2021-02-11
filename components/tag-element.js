import {
    LitElement,
    html,
    css
} from 'lit-element';
class TagElement extends LitElement {
    static get properties() {
        return {
            leerpad: {
                attribute: true
            },
            href: {
                attribute: true
            },
            color: {
                attribute:true
            }
        };
    }

    static get styles() {
        return css ` 
            :host {
                display:inline;
                margin-right:5px;
            }
            #tag {
                display:inline;
                border-radius:16px;
                padding: 0.3rem;
                padding-left:0.5rem;
                padding-right:0.5rem;
                background-color:var(--c-);
                color:var(--c4);
                font-size: calc(1em * var(--type-scale) * 0.9);
                line-height: calc(1em * var(--type-scale) * 2.3);
                font-weight:700;
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
            <div id="tag" style="background-color:${ this.color }">
                <span id="link"><a href="${ this.href }"><slot>${ this.leerpad }</slot></a></span>
            </div>
        `;
    }
}
customElements.define('tag-element', TagElement);