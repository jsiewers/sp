import {
    LitElement,
    html,
    css
} from 'lit-element';
class CardPanel extends LitElement {
    static get styles() {
        return css ` 
            #card-grid {
                margin-top:2rem;
                display:grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));                
                grid-gap:1.5rem;
           }
        `
    };

    render() {
        return html `
            <div id="card-grid"><slot></slot></div>
        `;
    }
}
customElements.define('card-panel', CardPanel);