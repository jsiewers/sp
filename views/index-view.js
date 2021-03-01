import {
    LitElement,
    html,
    css
} from 'lit-element';

import { mainStyles } from '../styles/main-styles.js';




class IndexView extends LitElement {
    static get styles() {
        return mainStyles
    };


    render() {
        return html `
        <article-head img="../img/learningpaths/index-developer.svg">
            <span slot="author">Jan Jaap Siewers</span>
            <span slot="date">11-02-2021</span>
            <span slot="header">Meer leren over design, IT en software development</span>
        </article-head>
        <section>
        <article-element>
            <span slot="header">Ontdek wat je kunt leren om straks je favoriete beroep uit te kunnen oefenen. </span>
            <span slot="col-1">

                <h3>Design</h3>
                Design. Op deze site vind je lesmateriaal en opdrachten waar design een rol bij speelt. Je leert hier niet zozeer vorm te geven, maar je leert hier wel om te gaan met userinterface guidelines en techniek om designs om te zetten in werkende applicaties en producten.
Er is hier vooral veel te doen als het om software development gaat. Veel materiaal is afgestemd op het kwalificatiedossier van de mbo-4 opleiding software developer. Het gaat om beginnerscursussen met een gestructureerde opbouw tot aan artikelen over de laatste ontwikkelingen.</span>
            <span slot="col-2">
            <h3>IT</h3>
            IT. De rol van software developers bij het beheer van applicaties wordt steeds belangrijker. Doordat applicaties door teams worden ontwikkeld zijn ze onderhevig aan veel aanpassingen en veranderingen. Om er toch voor te zorgen dat al die veranderingen goed zijn getest en goed werken moet een development team werken met software om versies in ontwikkeling en in productie te beheren. Denk hierbij aan versiesystemen en tools om het uploaden en configureren van software te automatiseren en te testen.</span>
        </article-element>
        <card-panel>
          <photo-card learningpath="game-developer">
            <span slot="title">Game developer</span>
            <span slot="text"></span>
          </photo-card>
          <photo-card learningpath="content-developer">
            <span slot="title">Content developer</span>
            <span slot="text"></span>
          </photo-card>
          <photo-card learningpath="full-stack-developer">
            <span slot="title">Full-stack developer</span>
            <span slot="text"></span>
          </photo-card>
          <photo-card learningpath="frontend-developer">
            <span slot="title">Frontend developer</span>
            <span slot="text"></span>
          </photo-card>
          <photo-card learningpath="interaction-designer">
            <span slot="title">Interaction designer</span>
            <span slot="text"></span>
          </photo-card>
        </card-panel>
        <section>
      `;
    }
}

customElements.define('index-view', IndexView);
