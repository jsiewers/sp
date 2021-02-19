import { LitElement, html, css } from 'lit-element';
import { mainStyles } from '../../../styles/main-styles.js';

export class HtmlIndex extends LitElement {
    static get properties() {
      return {
        doc: { type: String }
      }
    }

    constructor() {
      super();
      //this.location = location
      let chapter_id = location.pathname.split("/")[2];
      }

      static get styles() {
        return mainStyles
      };


    render() {
        return html`
        <article-head img="/img/courses/course_html5_head.svg">
          <span slot="author">Jan Jaap Siewers</span>
          <span slot="date">15-02-2021</span>
          <span slot="header">HTML5</span>
        </article-head>
        <section>
          <article-element>
            <span slot="header">Beginnen met Websites bouwen</span>
            <span slot="col-1">
            <h3>Doelgroep</h3>
            <h3>Leerdoelen</h3>
            <h3>Activiteiten</h3>
            <h3>Opbrengst</h3>
            <h3>Voorkennis</h3>
              <p>Een front-end developer houdt zicht vooral bezig met de 'look en feel' van een applicatie. Hij zorgt ervoor dat een applicatie gebruiksvriendelijk is en hij zorgt er voor dat een app of website er goed uitziet. Het gaat niet alleen om het uiterlijk het gaat ook om bedieningsgemak. Front-end developers zijn min of meer de spil als het gaat om de connectie tussen data, functionaliteit en gebruikersinterface.</p>
            </span>
            <span slot="col-2">
              <h3>Wat ga je leren?</h3>
              <p>Een front-end developer moet vooral verstand hebben van alles wat zich in een browser af kan spelen. Het gaat dan ook om de programmeertalen die je in de browser tegenkomt. Denk daarbij aan HTML en CSS, maar ook javascript wordt door een browser ondertsteund.</p>
              <p>Developers in het algemeen, maar speciaal front-end developers moeten geod kunnen samenwerken. Een front-end developer is in veel gevallen niet verantwoordelijk voor de gehele oplossing en moet dus samenwerken met devops-specialisten, opdrachtgevers, full-stack developers of database-specialisten.</p>
            </span>
          </article-element>
        </section>
      `
    }
}

customElements.define('html-index', HtmlIndex);
