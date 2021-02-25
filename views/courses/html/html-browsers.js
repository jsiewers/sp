import { html } from 'lit-element';
import { CourseIndex } from '../course-index.js'

class HtmlBrowsers extends CourseIndex {
  constructor() {
    super();
    this.img = "../../img/courses/course_html5_head.svg"
    this.base_url = "/courses/html-5"
  }

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
        <checked-item>Je gaat een geschikte browser installeren (als je die nog niet hebt).</checked-item>
        <checked-item>Je gaat een html-editor installeren</checked-item>
        <checked-item>Je gaat een website bouwen en publiceren op Github.com</checked-item>
        <h3>Opbrengst</h3>
        <p>Wat heb je uiteindelijk geleerd:</p>
        <checked-item>Je kunt de software installeren die je nodig hebt</checked-item>
        <checked-item>Je kunt een website bouwen met HTML..</checked-item>
        <checked-item>Je kent de tags waaruit een website minimaal is opgebouwd.</checked-item>
      </span>
        <span slot="col-2">
        ${ this.navigation("HTML5")}
          <h3>Voorkennis</h3>
          <h3>Wat ga je leren?</h3>
          <p>Een front-end developer moet vooral verstand hebben van alles wat zich in een browser af kan spelen. Het gaat dan ook om de programmeertalen die je in de browser tegenkomt. Denk daarbij aan HTML en CSS, maar ook javascript wordt door een browser ondertsteund.</p>
          <p>Developers in het algemeen, maar speciaal front-end developers moeten geod kunnen samenwerken. Een front-end developer is in veel gevallen niet verantwoordelijk voor de gehele oplossing en moet dus samenwerken met devops-specialisten, opdrachtgevers, full-stack developers of database-specialisten.</p>
          <p  style="margin-bottom:1rem;"></p>

        </span>
      </article-element>
    </section>
  `

    }
}

customElements.define('html-browsers', HtmlBrowsers);
