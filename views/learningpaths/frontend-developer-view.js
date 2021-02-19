import {BaseLearningpathView} from './base-learningpath-view.js';
import {html} from 'lit-element';

class FrontendDeveloperView extends BaseLearningpathView {
    
    render() {
        return html`
            <article-head img="../img/learningpaths/frontend-developer.svg">
				<span slot="author">Jan Jaap Siewers</span>
				<span slot="date">15-02-2021</span>
				<span slot="header">Frontend developer</span>
			</article-head>
			<section>
				<article-element>
					<span slot="header"></span>
					<span slot="col-1">
						<h3>Wat doet een frontend developer?</h3>
						<p>Een front-end developer houdt zicht vooral bezig met de 'look en feel' van een applicatie. Hij zorgt ervoor dat een applicatie gebruiksvriendelijk is en hij zorgt er voor dat een app of website er goed uitziet. Het gaat niet alleen om het uiterlijk het gaat ook om bedieningsgemak. Front-end developers zijn min of meer de spil als het gaat om de connectie tussen data, functionaliteit en gebruikersinterface.</p>
					</span>
					<span slot="col-2">
						<h3>Wat ga je leren?</h3>
						<p>Een front-end developer moet vooral verstand hebben van alles wat zich in een browser af kan spelen. Het gaat dan ook om de programmeertalen die je in de browser tegenkomt. Denk daarbij aan HTML en CSS, maar ook javascript wordt door een browser ondertsteund.</p>
						<p>Developers in het algemeen, maar speciaal front-end developers moeten geod kunnen samenwerken. Een front-end developer is in veel gevallen niet verantwoordelijk voor de gehele oplossing en moet dus samenwerken met devops-specialisten, opdrachtgevers, full-stack developers of database-specialisten.</p>
					</span>
				</article-element>

        ${this.getCourses(["GIT", "HTML", "CSS", "SCRUM", "GITHUB", "JS", "ES6"])}

        </section>`
    }
}

customElements.define('frontend-developer-view', FrontendDeveloperView);
