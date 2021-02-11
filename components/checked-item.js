import {
    LitElement,
    html,
    css
} from 'lit-element';
import 'fa-icons';

class CheckedItem extends LitElement {
     static get styles() {
        return css ` 
        div#check {
            display:flex;
            justify-content: space-between;
            margin-bottom:1rem;
        }

        div#icon {
            margin-right:1rem;
            color:green;
        }


    
    `
    };

    render() {
        return html `
            <div id="check">
                <div id="icon"><fa-icon class="fas fa-check"></fa-icon> </div>
                <div><slot></slot></div>
            </div>
        `;
    }
}
customElements.define('checked-item', CheckedItem);