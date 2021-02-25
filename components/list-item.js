import {
    LitElement,
    html,
    css
} from 'lit-element';

class ListItem extends LitElement {
     static get properties() {
       return {
         indent: {
           attribute: true,
           type: Number
         },
         style_type: {
           type: String
         }
       }
     }

     constructor() {
       super();
       //this.getListItemStyle();
       this.style_type = "fas fa-circle";
     }

    getListItemStyle() {
       switch(this.indent) {
         case 0:
         return "fas fa-minus";
         break;
         case 1:
         return "far fa-circle";
         break;
         case 2:
         return "fas fa-circle";
         break;
         case 3:
         return "fas fa-square";
         break;
         case 4:
         return "far fa-square";
         break;
         default:
         return "fas fa-circle";
       }
     }
     static get styles() {
        return css `
        div#list {
            display:flex;
            margin-bottom:0.5rem;
            justify-content: flex-start;
        }

        div#indent {
          flex: none;
        }

        div#icon {
          color:var(--c3);
          flex: none;
          margin-right:1rem;

        }

        div#text {
          flex-grow:1;
        }

    `
    };

    render() {
        return html `
            <div id="list">
                <div id="indent" style="width:${ this.indent }rem;"></div>
                <div id="icon"><fa-icon size="0.5rem" style="padding:0px;height:23px;vertical-align:top;" class="${ this.getListItemStyle() }"></fa-icon></div>
                <div id="text"><slot></slot></div>
            </div>
        `;
    }
}
customElements.define('list-item', ListItem);
