import { BaseLearningpathView } from './base-learningpath-view.js';
import {  html } from 'lit-element';

class FullStackDeveloperView extends BaseLearningpathView {
  render() {
        return html `
        <article-head img="../img/learningpaths/full-stack-developer.svg">
            <span slot="author">Jan Jaap Siewers</span>
            <span slot="date">15-02-2021</span>
            <span slot="header">Full stack developer</span>
        </article-head>
        <section>
        <article-element>
          <span slot="header"></span>
            <span slot="col-1">
                <h3>Wat doet een full stack developer?</h3>
                Een full stack developer programeert alle applicatie-onderdelen van zowel de front- als de back-end. Dus het gaat zowel om wat de gebruiker ziet en kan doen (frontend) als om de motor die dit mogelijk maakt (backend). Full stack programmeurs zijn meestal meer gefocussed op de techniek. Met name de back-end krijgt de veel aandacht. Full stack programmeurs zijn thuis in meerdere programmeertalen omdat in de back-end vaak andere talen worden gebruikt dan in het front-end gedeelte.
                <h3>Kenmerken van een full-stack-developer</h3>
                <p>Een full stack developer is een allrouder. Hij wil graag van alles wat weten. Hij heeft overzicht en hij begrijpt hoe alle componenten van een applicatie in elkaar grijpen. Hij weet hoe je een eenvoudig front-end voor een applicatie bouwt. Maar hij is vooral goed in het werken met databases en applicatieservers.</p>
              </span>
            <span slot="col-2">
            <h3>Wat ga je leren?</h3>
              <p>In dit leertraject leer je een beetje front-end, maar de focus ligt vooral op het programmeren van back-end technologie. Denk hierbij aan het werken met gegevens in databases en server-side technologieën als PHP, Java en/of NodeJS.</p>
              <p>Je start met het leren van basis programmeervaardigheden, daarna leer je de verschillende specifieke web-technologieën kennen. Het gaat dan om HTML, CSS en Javascript. De meeste tijd zal je bezig zijn met het programmeren van de backend. Het gaat dan vooral om de ontwikkeling van applicaties in de backend, maar ook om het werken met gegevens en het opzetten van databases waarin die gegevens worden beheerd</p>
            </span>
        </article-element>

        ${this.getCourses(["GIT", "HTML-5", "CSS", "SCRUM", "GITHUB", "JS", "PHP", "MYSQL", "MYSQL_DESIGN", "OOPHP", "PHPFW", "LINUX", "DEVOPS", "ES6", "WPPHP", "WP"])}

        </section>
        `;
    }
}

customElements.define('full-stack-developer-view', FullStackDeveloperView);
