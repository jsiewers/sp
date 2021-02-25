import {
    LitElement,
    html,
    css
} from 'lit-element';

class CheckedItem extends LitElement {
     static get styles() {
        return css `
        div#check {
            display:grid;
            margin-bottom:0.5rem;
            grid-template-columns: 30px auto;
        }

        div#icon {
            color:var(--c3);
        }
    `
    };

    render() {
        return html `
            <div id="check">
                <div id="icon"><fa-icon size="0.9rem" class="fas fa-check"></fa-icon> </div>
                <div id="text"><slot></slot></div>
            </div>
        `;
    }
}
customElements.define('checked-item', CheckedItem);
