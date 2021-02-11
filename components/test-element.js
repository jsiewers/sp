import { LitElement, html, css } from 'lit-element';

class TestElement extends LitElement {
    static get styles() {
        return css` 
                :host {
                    width:200px;
                }     

                div {
                    float:right;
                }
                
                div a {
                    color:pink;
                }

                .description {
                    color:green;
                }
                a {
                    color:blue;
                    text-decoration: none;
                }  
               p ::slotted(*) {
                color:purple;
               }    
    
        `;
    }
    render() {
        return html`
            <p class="description">lkjhlkjhklh<slot name="description">De description</slot></p>
            <p><slot name="body">Donec ut mattis diam, vel mollis erat. Cras elit metus, laoreet at ultricies ac, finibus
                suscipit
                ante.</slot></p>
            <div id="link"><a href="#">Lees meer...</a></div>
    `;
    }
}
customElements.define('test-element', TestElement);
