import {
    LitElement,
    html,
    css
} from 'lit-element';




class FullStackDeveloperView extends LitElement {
    static get styles() {
        return css `
            `
    };

    render() {
        return html `
        <article-head>
            <span slot="author">Jan Jaap Siewers</span>
            <span slot="date">15-02-2021</span>
            <span slot="header">Full stack developer</span>
        </article-head>
        <article-element>
            <span slot="header">Wat is een full stack developer</span>
            <span slot="col-1">
                <h3>Wat doet een full stack developer</h3>
                Een full stack developer programeert alle applicatie-onderdelen van zowel de front- als de back-end. Full stack programmeurs zijn meestal meer gefocussed op de techniek. Met name de back-end krijgt de meeste aandacht. Full stack programmeurs zijn thuis in meerdere programmeertalen omdat in de back-end vaak andere talen worden gebruikt dan in het front-end gedeelte.
            </span>
            <span slot="col-2">
                <h3>Wat voor een type mens is een full stack developer</h3>
                Een full stack developer is een allrouder. Hij wil graag van alles wat weten. Hij weet hoe je een eenvoudig front-end voor een applicatie bouwt. Maar hij is vooral goed in het werken met databases en applicatieservers.
            </span>
        </article-element>
        <article-element>
            <span slot="header">Wat kan een full stack developer</span>
            <span slot="col-1">
                In dit leertraject leer je een beetje front-end, maar de focus ligt vooral op het programmeren van back-end technologie. Denk hierbij aan het werken met gegevens in databases. Het werken met middleware applicaties die zijn gebouwd in php, java of nodejs.
            </span>
            <span slot="col-2">
                Een full stack developer moet kunnen putten uit een flinke kist gereedschap. Hij is een ster in meerdere programmeertalen en hij overziet de total applicatie.
            </span>
        </article-element>
        <article-element>
            <span slot="header"><h3>leertraject</h3></span>
            <span slot="col-1">
            </span>
            <span slot="col-2">
            </span>
        </article-element>
        <course-element video="??" onderwerpen="??" projecten="??" src="img/courses/course_git.svg">
            <span slot="title">
            Leren werken met versiebeheer in Git
            </span>
            <span slot="text">
              Deze cursus is voor beginnende programmeurs die niet graag hun werk kwijt raken of per ongeluk code weggooien. Je kunt het geloven of niet, maar het gebeurt bijna bij iedere startende programmeur. Git is de oplossing en het is niet meer weg te denken bij vrijwel ieder software project.<br />
            </span>
        </course-element>        <course-element video="4" onderwerpen="2" projecten="6" src="img/courses/course_html5.svg" href="/course-html5">
            <span slot="title">
              Beginnerscursus HTML5
            </span>
            <span slot="text">
              kssdlfjks dlfkjsdf oweir jsdfklnwerop svdn,xnv sefjwe pfosdj fxdkvnoefjw pefojs f
            </span>
        </course-element>
        <course-element video="4" onderwerpen="2" projecten="6" src="img/courses/course_css.svg" href="/course-css">
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

        `;
    }
}

customElements.define('full-stack-developer-view', FullStackDeveloperView);
