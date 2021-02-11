import {LitElement, html, css} from 'lit-element';


class NavLink extends LitElement {
    static get properties() {
        return {
            href: {attribute: true},
        };
    }
    
    static get styles() {
        return css` 
            a {
                color:#fff;
                text-decoration:none;
                margin-left:1rem;
            }
                                                       
        `;
    }

    render() {
        return html`
                <a href="${ this.href }"><slot>link</slot></a>
         `;
    }
}

customElements.define('nav-link', NavLink);
