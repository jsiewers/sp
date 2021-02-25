import { html } from 'lit-element';
import { CourseIndex } from '../course-index.js'


class HtmlIntro extends CourseIndex {
  constructor() {
    super();
    this.img = "../../img/courses/course_html5_head.svg"
    this.base_url = "/courses/html-5"
  }

    render() {
        return html`
        <article-head img="${this.img}">
          <span slot="author">Jan Jaap Siewers</span>
          <span slot="date">22-02-2021</span>
          <span slot="header">HTML5</span>
        </article-head>
        <section>
          <bread-crumbs loc="${location}"></bread-crumbs>
          <article-element>
            <span slot="header">Beginnen met Websites bouwen</span>
            <span slot="col-1">
            <h3>Doelgroep</h3>
            <p>Deze cursus is de basis voor veel nieuwe ontwikkelaars:</p>
              <list-item>
                Iedereen die wil leren programmeren krijgt te maken met webtechnologie. Zelfs bij het ontwikkelen van games kun je niet heen om de belangrijkste taal van internet. HTML is afgeleid van XML en het is 'here to stay'.
              </list-item>
              <list-item>
                HTML is niet een echte programmeertaal. Als je je vooral toe wilt leggen op design, dan is HTML een belangrijke basis om straks je ontwerp ideeën te realiseren.
              </list-item>
              <list-item>
                Designers, frontend-, backend- en andere developers. Voor al deze professionals is HTML niet weg te denken uit je toolbox!
              </list-item>
            </ul>
            <h3>Leerdoelen</h3>
            <p>Om te beginnen met programmeren moet je begrijpen hoe browsers werken. Alles wat je in de browser ziet wordt aangestuurd door code. In deze cursus ga je de belangrijkste elementen leren kennen en toepassen die aan de basis liggen van applicaties die in een browser of een HTMLViewer worden getoond.</p>
            <h3>Activiteiten</h3>
            Wat ga je allemaal doen. In deze cursus vind je uitleg over HTML. Om te oefenen ga je proberen met HTML code een aantal websites te bouwen. Websites maken gebruik van verschillende media. Denk aan: teksten, plaatjes, video's, animaties en meer. Je gaat verschillende typen media bewerken en geschikt maken en implementeren in je sites.
            <h3>Opbrengst</h3>
            <p>Wat heb je uiteindelijk geleerd:</p>
              <list-item>Je hebt specialistische kennis van browsers en je kunt uitleggen hoe browsers omgaan met HTML</list-item>
              <list-item>Je kunt HMTL toepassen om een eenvoudige website te bouwen</list-item>
              <list-item>Je kunt media geschikt maken om in een website te gebruiken</list-item>
              <list-item>Je kunt verschillende media in een website implementeren</list-item>
              <list-item>Je kunt een website online publiceren</list-item>

          </span>
            <span slot="col-2">
            ${ this.navigation("HTML5")}
              <h3>Voorkennis</h3>
              <p>Om te beginnen met deze cursus heb je nog geen programmeerkennis nodig. Wat moet je wel kunnen:</p>
                <list-item>Je moet wel in staat zijn om programma's op je computer te installeren.</list-item>
                <list-item>Je hebt voldoende vaardigheden om files en folders op je computer te beheren.</list-item>
              <h3>Wat ga je leren?</h3>
              <p>Een front-end developer moet vooral verstand hebben van alles wat zich in een browser af kan spelen. Het gaat dan ook om de programmeertalen die je in de browser tegenkomt. Denk daarbij aan HTML en CSS, maar ook javascript wordt door een browser ondertsteund.</p>
              <p>Developers in het algemeen, maar speciaal front-end developers moeten geod kunnen samenwerken. Een front-end developer is in veel gevallen niet verantwoordelijk voor de gehele oplossing en moet dus samenwerken met devops-specialisten, opdrachtgevers, full-stack developers of database-specialisten.</p>
              <p  style="margin-bottom:1rem;"></p>
            </card-element>
            </span>
          </article-element>
        </section>
      `
    }
}

customElements.define('html-intro', HtmlIntro);
