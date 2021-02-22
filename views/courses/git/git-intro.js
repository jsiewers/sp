import { html } from 'lit-element';
import { CourseIndex } from '../course-index.js'



class GitIntro extends CourseIndex {
  constructor() {
    super();
    this.img = "../../img/courses/course_git_head.svg"
    this.base_url = "/courses/git"
  }

    render() {
        return html`
        <article-head img="${this.img}">
          <span slot="author">Jan Jaap Siewers</span>
          <span slot="date">22-02-2021</span>
          <span slot="header">Versiebeheer met Git</span>
        </article-head>
        <section>
          <bread-crumbs loc="${location}"></bread-crumbs>
          <article-element>
            <span slot="header">Starten met Git</span>
            <span slot="col-1">
            <h3>Doelgroep</h3>
            <p>Deze cursus is de basis voor veel nieuwe ontwikkelaars:</p>
            <ul>
              <li>
                Git is de ideale manier om versies van bestanden te beheren. In samenwerking met een externe opslagplaats is Git de manier om nooit meer bestanden kwijt te raken.
              </li>
              <li>
                Git is tevens de ideale manier om je code te herstellen. Eerst werkte de code nog, maar nu heb je zitten prutsen en ineens doet niks het meer! Met Git kun je altijd terug naar de laatste goed werkende versie!
              </li>
              <li>
                Git is niet meer weg te denken uit de gereedschapskist van iedere ontwikkelaar. Git is niet alleen voor webontwikkelaars of full-stack developers, maar voor alle developers. Het is zelfs geschikt voor het bijhouden van documentatie.
              </li>
            </ul>
            <h3>Voorkennis</h3>
            <p>Om te beginnen met deze cursus heb je nog geen programmeerkennis nodig. Wat moet je wel kunnen:</p>
            <ul>
              <li>Je moet wel in staat zijn om programma's op je computer te installeren.</li>
              <li>Je hebt voldoende vaardigheden om files en folders op je computer te beheren.</li>
            </ul>
            <h3>Leerdoelen</h3>
            <p>In eerste instantie moet je begrijpen hoe Git werkt. Wat doet het voor je en wat kan het je opleveren. Daarnaast ga je leren hoe git past in je ontwikkelomgeving en welke commando's je kunt gebruiken om Git aan te sturen.</p>
          </span>
            <span slot="col-2">
            ${ this.navigation()}
            <h3>Activiteiten</h3>
            <ul>
              <li>Je gaat Git installeren</li>
              <li>Je gaat onderzoeken hoe git werkt onder de motorkap.</li>
              <li>Je gaat experimenteren met git commando'</li>
              <li>Je gaat documentatie maken en aanpassen in Git .</li>
            </ul>
            <h3>Opbrengst</h3>
            <p>Wat heb je uiteindelijk geleerd:</p>
            <ul>
              <li>Je kunt Git installeren</li>
              <li>Je kent een aantal basiscommando's in Git.</li>
              <li>Je kunt een workflow opzetten met Git om code of documentatie te beheren</li>
            </ul>

            </span>
          </article-element>
        </section>
      `
    }
}

customElements.define('git-intro', GitIntro);
