import { html } from 'lit-element';
import { HtmlIndex } from './html-index.js'

class HtmlBrowsers extends HtmlIndex {
  render() {
      return html`
      <article-head img="${ this.img }">
        <span slot="author">Jan Jaap Siewers</span>
        <span slot="date">20-02-2021</span>
        <span slot="header">HTML5</span>
      </article-head>
      <section>
        <bread-crumbs loc="${location}"></bread-crumbs>
        <article-element>
          <span slot="header">Browsers en HTML</span>
          <span slot="col-1">
          <h3>Leerdoelen bij dit onderwerp</h3>
          <checked-item>In dit onderdeel ga je leren hoe een browser werkt.</checked-item>
          <checked-item>Je hebt kennis van methoden en protocollen waarmee browsers internet-pagina's binnenhalen en verwerken</checked-item>
          <checked-item>Je hebt kennis van de opbouw van url's</checked-item>
          <h3>Activiteiten</h3>
          Wat ga je allemaal doen. In deze cursus vind je uitleg over HTML. Om te oefenen ga je proberen met HTML code een aantal websites te bouwen. Websites maken gebruik van verschillende media. Denk aan: teksten, plaatjes, video's, animaties en meer. Je gaat verschillende typen media bewerken en geschikt maken en implementeren in je sites.
          <h3>Opbrengst</h3>
          <p>Wat heb je uiteindelijk geleerd:</p>
          <ul>
            <li>Je hebt specialistische kennis van browsers en je kunt uitleggen hoe browsers omgaan met HTML</li>
            <li>Je kunt HMTL toepassen om een eenvoudige website te bouwen</li>
            <li>Je kunt media geschikt maken om in een website te gebruiken</li>
            <li>Je kunt verschillende media in een website implementeren</li>
            <li>Je kunt een website online publiceren</li>
          </ul>

        </span>
          <span slot="col-2">
            <h3>Voorkennis</h3>
            <p>Om te beginnen met deze cursus heb je nog geen programmeerkennis nodig. Wat moet je wel kunnen:</p>
            <ul>
              <li>Je moet wel in staat zijn om programma's op je computer te installeren.</li>
              <li>Je hebt voldoende vaardigheden om files en folders op je computer te beheren.</li>
            </ul>
            <h3>Wat ga je leren?</h3>
            <p>Een front-end developer moet vooral verstand hebben van alles wat zich in een browser af kan spelen. Het gaat dan ook om de programmeertalen die je in de browser tegenkomt. Denk daarbij aan HTML en CSS, maar ook javascript wordt door een browser ondertsteund.</p>
            <p>Developers in het algemeen, maar speciaal front-end developers moeten geod kunnen samenwerken. Een front-end developer is in veel gevallen niet verantwoordelijk voor de gehele oplossing en moet dus samenwerken met devops-specialisten, opdrachtgevers, full-stack developers of database-specialisten.</p>
            <p  style="margin-bottom:1rem;"></p>
            ${ this.navigation()}

          </span>
        </article-element>
      </section>
    `

    }
}

customElements.define('html-browsers', HtmlBrowsers);
