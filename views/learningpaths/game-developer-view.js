import { BaseLearningpathView } from './base-learningpath-view.js';
import {  html } from 'lit-element';

class GameDeveloperView extends BaseLearningpathView {
  render() {
        return html `
        <article-head img="../img/learningpaths/game-developer.svg">
            <span slot="author">Jan Jaap Siewers</span>
            <span slot="date">02-03-2021</span>
            <span slot="header">Game developer</span>
        </article-head>
        <section>
        <article-element>
          <span slot="header"></span>
            <span slot="col-1">
                <h3>Wat doet een full game developer?</h3>
                Een game developer is iemand die games ontwikkelt voor verschillende platforms. Denk aan serious games als webapp of games voor spelcomputers. Een gamedeveloper kan niet alleen creatieve concepten bedenken, maar heeft ook specialistische kennis van de techniek achter een game.

              </span>
            <span slot="col-2">
            <h3>Wat ga je leren?</h3>
            Een game developer zet creatieve ideeën om in praktische en technisch goed werkende games of prototypes. Hij ontwerpt, bouwt en programmeert interactieve digitale producten en houdt zich vooral bezig met de technische aspecten van games. Als game developer werk je dus niet per se aan games die in de vrije tijd gespeeld worden, maar ook aan games die voor educatieve en professionele doeleinden worden gebruikt.


              <p></p>
            </span>
        </article-element>

        ${this.getCourses(["GIT", "HTML-5", "CSS", "SCRUM", "GITHUB", "JS"])}

        </section>
        `;
    }
}

customElements.define('game-developer-view', GameDeveloperView);
