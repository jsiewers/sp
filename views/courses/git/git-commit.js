import { html } from 'lit-element';
import { CourseIndex } from '../course-index.js'



class GitCommit extends CourseIndex {
  constructor() {
    super();
    this.img = "../../img/courses/course_git_head.svg"
    this.base_url = "/courses/git"
  }

  externalLinks() {
        return [ html `
          <h4>Externe links</h4>
          <link-item href="https://rogerdudler.github.io/git-guide/index.nl.html"><span slot="link">git- een simpele uitleg</span></link-item>
      ` ]
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
          <span slot="header">Opdracht 2: Een Git repository beheren</span>
          <span slot="col-1">
          <h3>Voordat je kunt beginnen</h3>
          <p>Voor deze opdracht heb je het eindresultaat van opdracht 1 nodig. Een projectmap gevuld met een aantal tekst-bestanden.<p>
          <p>Om je project op te slaan in het versiebeheersysteem Git, heb je een repository nodig. Een repository is een soort bibliotheek waar alle veranderingen die je aanbrengt aan je project worden opgeslagen. Door gebruik te maken van Git commando's kun je een repository beheren.</p>
          <p>Hieronder vind je een aantal git-commando's die je moet kennen:</p>
          <br />
          <code-element>
git initial
// Maak een nieuwe lege repository aan
// in de huidige map
git clone gebruiker@host:/path/to/repository
// Maak een kopie van een bestaande repository
//(bijvoorbeeld vanaf github)
git add
// Voeg nieuwe, verwijderde en veranderde bestanden
// toe aan stage.
git commit -m "mijn bericht"
// Voer de veranderingen in de stage door in de
// repository
git remote -v
// Bekijk een lijst van repositories waarmee deze
// repository is gelinkt
git remote
add origin gebruiker@host:/path/to/repository
// Voeg een link naar lege repository op een server
// (bijv. github) toe aan je repository.
// Noem de link 'origin'
git push origin master
// Synchroniseer je lokale repository met een
// repository op een server (origin)
git push origin master
// toon ook “verborgen” files
git pull origin master
// Haal een nieuwe versie op van de server en
// synchroniseer met je lokale repository
          </code-element>
          </span>
          <span slot="col-2">
          ${ this.navigation()}
          <h3>De opdracht</h3>
          <list-item>Maak een lege repository aan in je projectmap "recepten".</list-item>
          <list-item>Voeg de bestaande bestanden toe aan de stage van je repository</list-item>
          <list-item>Commit je bestanden naar de repository, met in de commentaarregel "toevoegen bestaande recepten"</list-item>
          <list-item>Maak een vierde recept en voeg het toe aan je repository.</list-item>
          <list-item>Maak een lege remote repository aan op github.com. (dus geen readme toevoegen)</list-item>
          <list-item>Voeg aan je lokale repository een link toe naar de remote repository met de naam 'origin'</list-item>
          <list-item>Synchroniseer je bestanden met de repository op Github.</list-item>
          <h3>Resultaten van deze opdracht</h3>
          <checked-item>Een lokale repository met 4 recepten</checked-item>
          <checked-item>Een gesynchroniseerde remote repository op Github met 4 recepten</checked-item>
          </span>
        </article-element>
      </section>
    `
  }
}

customElements.define('git-commit', GitCommit);
