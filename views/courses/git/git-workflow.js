import { html } from 'lit-element';
import { CourseIndex } from '../course-index.js'



class GitWorkflow extends CourseIndex {
  constructor() {
    super();
    this.img = "../../img/courses/course_git_head.svg"
    this.base_url = "/courses/git"
  }

  externalLinks() {
        return [ html `
          <h4>Externe links</h4>
          <link-item href="https://rogerdudler.github.io/git-guide/index.nl.html"><span slot="link">Git- een simpele uitleg</span></link-item>
          <link-item href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks"><span slot="link">Working with forks (github docs)</span></link-item>
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
          <span slot="header">Opdracht 3: Een fork maken van een repository op Github</span>
          <span slot="col-1">
            <h3>Voordat je kunt beginnen</h3>
            <p>Voor deze opdracht maak je gebruik van een bestaande repository op github. Zorg ervoor dat je zelf al een account hebt op github.</p>
            <p>In deze odpracht ga je meehelpen met de bouw van een receptenboek. Je kunt je voorstellen dat als iedereen een paar recepten publiceert dat je binnen no-time een boek vol interessante recepten hebt!</p>
            <p>Iedereen kan natuurlijk van alles publiceren, dus de eigenaar en oprichter van dit receptenboek wil wel zelf graag de regie houden over wat wel en wat niet wordt gepubliceerd! Het moet wel een beetje lekker zijn natuurlijk.</p>
            <p>Aan jou de vraag om ook een recept te publiceren in het boek.</p>
            <p>Je gaat aan het werk in een kopie (fork) van het originele receptenboek. Als je je recept hebt toegevoegd leg je je recept voor aan de eigenaar (pull request). Hij bepaald dan of je recept wordt toegevoegd. Het kan ook zijn dat je nog een paar aanpassingen moet doen voordat het gepubliceerd kan worden.</p>
            <h3>De opdracht</h3>
            <list-item>Maak een fork van de repository <a href="https://www.github.com/jsiewers/recepten">jsiewers/recepten</a> op github.com.</list-item>
            <list-item>Voeg zelf een recept toe aan het receptenboek. Daar moet je een paar dingen voor doen:</list-item>
            <list-item>Maak een fork van de jsiewers/recepten repository op github.</list-item>
            <list-item indent="1">Nu heb je een een copy van jsiewers/recepten in je eigen github-account</list-item>
            <list-item>Maak een nieuwe project-directory aan op je eigen computer</list-item>
            <list-item>Clone de jouw-account/recepten naar de project-directory op je lokale machine</list-item>
            <list-item indent="1">Je hebt nu een git repository met een link naar jouw recepten repository op github.</list-item>
            <list-item>Voeg een remote link toe (upstream) naar de originele repository op jsiewers/recepten.</list-item>
            <list-item>Voeg een recept toe.</list-item>
            <list-item>Add en commit het nieuwe recept naar je lokale repository</list-item>
            <list-item>Voer een git pull uit naar upstream, zodat je zeker weet dat je in sync bent met de originele repository</list-item>
            <list-item>Push het nieuwe recept naar je eigen repository op github.com</list-item>
            <list-item>Vraag een pull request aan op github. Jsiewers krijgt dan een melding met de vraag om je recept toe te voegen aan de originele repository</list-item>
          </span>
          <span slot="col-2">
            ${ this.navigation("GIT")}


          <video-element video="videoseries?list=PL_dDpKbU0KLZavUC-xUP0NlYs-bQoBXEX"></video-element>
          <h3>Resultaten van deze opdracht</h3>
          <checked-item>Een lokale repository met 4 recepten</checked-item>
          <checked-item>Een gesynchroniseerde remote repository op Github met 4 recepten</checked-item>
          <checked-item>Een pull-request aan jsiewers met de vraag om jouw recept toe te voegen aan de originele repository</checked-item>
          </span>
        </article-element>
      </section>
    `
  }
}

customElements.define('git-workflow', GitWorkflow);
