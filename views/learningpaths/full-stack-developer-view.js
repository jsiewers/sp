import {
    LitElement,
    html,
    css
} from 'lit-element';
import { mainStyles } from '../../styles/main-styles.js';




class FullStackDeveloperView extends LitElement {
    static get styles() {
      return mainStyles
    };

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
                Een full stack developer programeert alle applicatie-onderdelen van zowel de front- als de back-end. Full stack programmeurs zijn meestal meer gefocussed op de techniek. Met name de back-end krijgt de meeste aandacht. Full stack programmeurs zijn thuis in meerdere programmeertalen omdat in de back-end vaak andere talen worden gebruikt dan in het front-end gedeelte.
                <h3>Waaraan herken je een full stack developer?</h3>
                Een full stack developer is een allrouder. Hij wil graag van alles wat weten. Hij heeft overzicht en hij begrijpt hoe alle componenten van een applicatie in elkaar grijpen. Hij weet hoe je een eenvoudig front-end voor een applicatie bouwt. Maar hij is vooral goed in het werken met databases en applicatieservers.
              </span>
            <span slot="col-2">
                <h3>Wat moet je al kunnen?</h3>
                <checked-item>
                  Basis front-end development met HTML5 en CSS. Je moet een eenvoudige website kunnen bouwen en stylen.
                  In de cursussen <tag-element href="/course/html5" color="var(--c7)">HTML5</tag-element> en <tag-element href="/course/css3" color="var(--c7)">CSS3</tag-element> kun je dat leren.
                </checked-item>
                <checked-item>
                  Basis programmeren in PHP. Je moet kunnen werken met verschillende datatypen. Je kunt met formulieren werken en je kunt al gegevens versturen via POST en GET. In de cursus <tag-element href="/course/php8" color="var(--c7)">Beginnen met PHP 8</tag-element> kun je dat leren.
                </checked-item>
                <checked-item>
                  Je kunt werken met databases. Je kunt queries schrijven en gegevens uit meerdere tabellen tegelijk ophalen.
                  Je kunt vanuit een reeks user-stories of functionaliteiten een technisch ontwerp voor een database maken en op een database-server installeren.
                  In de cursussen <tag-element href="/course/db-sql" color="var(--c7)">Databases en SQL Queries</tag-element> en <tag-element href="/course/db-design" color="var(--c7)">Databases ontwerpen</tag-element> kun je dat leren.
                </checked-item>
            </span>
        </article-element>
        <article-element>
          <span slot="header"></span>
          <span slot="col-1">
            <card-element>
                  <span slot="title">Welke onderwerpen komen aan bod.</span>
                  <span slot="text">
                    <p>In dit leertraject leer je een beetje front-end, maar de focus ligt vooral op het programmeren van back-end technologie. Denk hierbij aan het werken met gegevens in databases en server-side technologieën als PHP, Java en/of NodeJS.</p>
                    <checked-item>
                      Git versiebeheer en versiebeheer met teams
                    </checked-item>
                    <checked-item>
                     Server-side programmeren met PHP en PDO
                    </checked-item>
                    <checked-item>
                     Database queries maken en databases ontwerpen
                    </checked-item>
                    <checked-item>
                     Object georiënteerd programmeren in  PHP
                    </checked-item>
                    <checked-item>
                     Werken met MVC frameworks in  PHP
                    </checked-item>
                    <checked-item>
                     Testen en security
                    </checked-item>
                    <checked-item>
                     Basis linux installatie en commando's
                    </checked-item>
                    <checked-item>
                     Inrichten van een webserver in linux
                    </checked-item>
                  </span>
                  <span slot="link"> </span>
              </card-element>
          </span>
            <span slot="col-2">
            <card-element>
                  <span slot="title">Wat ga je doen.</span>
                  <span slot="text">
                    <p>Hieronder zie je een greep uit de opdrachten en projecten die je gaat realiseren in dit leertraject</p>
                    <checked-item>
                      Je gaat een na een aantal oefenopdrachten een volledige 1-page website bouwen op basis van HTML5 en CSS3.
                    </checked-item>
                    <checked-item>
                      Je gaat met een team een website bouwen die bestaat uit meerdere onderwerpen. Samenwerken met versiebheer in git staat hierbij centraal
                    </checked-item>
                    <checked-item>
                     Je gaat een aantal oefenopdrachten maken met PHP. Vervolgens kies je een project die je moet gaan maken voor een opdrachtgever. Hiervoor moet je zelf de functionaliteiten achterhalen in een gesprek.
                    </checked-item>
                    <checked-item>
                     Je gaat aan de slag met een aantal oefenopdrachten waarbij de structuur van je code en het werken met objecten in code centraal staat.
                    </checked-item>
                    <checked-item>
                     Je gaat op basis van een PHP framework een project realiseren voor een externe klant. Je zorgt er voor dat het project netjes wordt opgeleverd en geïmplementeerd. Het resultaat is een werkende webapplicatie op internet!
                    </checked-item>
                </span>
                <span slot="link"> </span>
              </card-element>
            </span>
        </article-element>
        <h1>Leertraject</h1>
        <course-element video="??" onderwerpen="??" projecten="??" src="img/courses/course_git.svg">
            <span slot="title">
            Leren werken met versiebeheer in Git
            </span>
            <span slot="text">
              Deze cursus is voor beginnende programmeurs die niet graag hun werk kwijt raken of per ongeluk code weggooien. Je kunt het geloven of niet, maar het gebeurt bijna bij iedere startende programmeur. Git is de oplossing en het is niet meer weg te denken bij vrijwel ieder software project.<br />
            </span>
        </course-element>
        <course-element video="??" onderwerpen="??" projecten="??" src="img/courses/course_github.svg">
            <span slot="title">
            Teamwork in Git en Github
            </span>
            <span slot="text">
              Git voor gevorderden. In de cursus komt aan de orde hoe je met een team volgens scrum-methodiek kunt werken met Github Projects en Git versiebeheer<br />
            </span>
        </course-element>
        <course-element video="4" onderwerpen="2" projecten="6" src="img/courses/course_html5.svg" href="/course-html5">
            <span slot="title">
              Beginnerscursus HTML5
            </span>
            <span slot="text">
              kssdlfjks dlfkjsdf oweir jsdfklnwerop svdn,xnv sefjwe pfosdj fxdkvnoefjw pefojs f
            </span>
        </course-element>
        <course-element video="4" onderwerpen="2" projecten="6" src="img/courses/course_css3.svg" href="/course-css">
            <span slot="title">Starten met CSS3</span>
            <span slot="text">kssdlfjks dlfkjsdf oweir jsdfklnwerop svdn,xnv sefjwe pfosdj fxdkvnoefjw pefojs f </span>
        </course-element>
        <course-element video="16" onderwerpen="2" projecten="12" src="img/courses/course_php8_beginners.svg" href="/course-php">
            <span slot="title">Beginnerscursus PHP 8</span>
            <span slot="text">Deze cursus is voor beginnende programmeurs die niet of niet veel ervaring hebben met PHP. PHP is een taal waarmee je vooral websites en webapplicaties mee kunt bouwen. Het is een zgn. server-side taal. PHP wordt uitgevoerd op een server en niet in je browser.<br />
            </span>
        </course-element>
        <course-element video="16" onderwerpen="2" projecten="12" src="img/courses/course_wp.svg">
            <span slot="title">Wordpress</span>
            <span slot="text">Deze cursus is voor beginnende programmeurs die niet of niet veel ervaring hebben met PHP. PHP is een taal waarmee je vooral websites en webapplicaties mee kunt bouwen. Het is een zgn. server-side taal. PHP wordt uitgevoerd op een server en niet in je browser.<br />
            </span>
        </course-element>
        <course-element video="2" onderwerpen="1" projecten="5" src="img/courses/course_seo.svg">
            <span slot="title">SEO</span>
            <span slot="text">Deze cursus is voor beginnende programmeurs die niet of niet veel ervaring hebben met PHP. PHP is een taal waarmee je vooral websites en webapplicaties mee kunt bouwen. Het is een zgn. server-side taal. PHP wordt uitgevoerd op een server en niet in je browser.<br />
            </span>
        </course-element>
        <course-element video="16" onderwerpen="2" projecten="12" src="img/courses/course_wp_php.svg">
            <span slot="title">
            Wordpress plugins en thema's met CSS en PHP
            </span>
            <span slot="text">
              Deze cursus is voor beginnende programmeurs die niet of niet veel ervaring hebben met PHP. PHP is een taal waarmee je vooral websites en webapplicaties mee kunt bouwen. Het is een zgn. server-side taal. PHP wordt uitgevoerd op een server en niet in je browser.<br />

            </span>
        </course-element>
        <course-element video="??" onderwerpen="??" projecten="??" src="img/courses/course_linux.svg">
            <span slot="title">
            Linux voor developers
            </span>
            <span slot="text">
              Deze cursus is voor developers die een eigen server willen installeren en beheren. Je leert te werken met Apache, OpenSSH en meer.<br />

            </span>
        </course-element>
        <course-element video="??" onderwerpen="??" projecten="??" src="img/courses/course_javascript.svg">
            <span slot="title">
              Beginnen met Javascript
            </span>
            <span slot="text">
              Deze cursus is voor de startende web- en front-end developer.Je leert de basisvaardigheden van javascript

            </span>
        </course-element>
        </section>
        `;
    }
}

customElements.define('full-stack-developer-view', FullStackDeveloperView);
