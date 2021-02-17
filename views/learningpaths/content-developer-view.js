import {
    LitElement,
    html,
    css
} from 'lit-element';




class ContentDeveloperView extends LitElement {
    static get styles() {
        return css `
            `
    };

    render() {
        return html `
        <article-head img="">
            <span slot="author">Jan Jaap Siewers</span>
            <span slot="date">11-02-2021</span>
            <span slot="header">Content developer</span>
        </article-head>
        <article-element>
            <span slot="header">Wat is een content developer</span>
            <span slot="col-1">
                <h3>Wat doet een content developer</h3>
                Content Developers research, prepare, write, and edit online content for marketing and front-end web development. They are involved in the writing of blog posts, static copy, and video content and well as the technical aspects, such as SEO and HTML formatting.
            </span>
            <span slot="col-2">
                <h3>Wat voor een type mens is een content developer</h3>
                The responsibilities of the Content Developer include creating original content for our website and advertising that includes copywriting, graphics, and technical work. The Content Developer must also adhere to SEO best practices.
                To be successful as a Content Developer, you should have great communication, research, and teamwork skills. Ultimately, a top-notch Content Developer has a good working knowledge of content management software as well as a basic knowledge of HTML and an eye for detail.
            </span>
        </article-element>
        <article-element>
            <span slot="header">Wat kan een content developer</span>
            <span slot="col-1">
                <h3>Welke verantwoordelijkheden heeft een content developer</h3>
                Coming up with content goals and strategies and pitching ideas to the Marketing and Communications Directors. Collaborating with other departments and team members and brainstorming subjects for creative content. Creating unique, simple-to-understand, and user-friendly content using good SEO techniques.
                Writing new web content and editing existing content.
                Editing and proofreading new content before publication.
                Managing the distribution of content through our various channels, including social media.
                Analyzing performance indicators and web traffic and determining the effectiveness of created content.
            </span>
            <span slot="col-2">
                <h3>Welke skills en diploma's heeft een content developer nodig</h3>
                Associate's or Bachelor's degree in Computer Science, Marketing, Mass Communication, or a related field.
                Experience in Copywriting, Graphic Design, Programming, or a related field may be advantageous.
                Strong working knowledge of content management software, including Asana, WordPress, Photoshop, and Flash.
                Good working knowledge of HTML and SEO.
                Excellent written and verbal communication skills.
                Strong attention to detail, multitasking, and analytical skills.
                Ability to work independently and as part of a team.
            </span>
        </article-element>
        <article-element>
            <span slot="header"><h3>leertraject</h3></span>
            <span slot="col-1">
            </span>
            <span slot="col-2">
            </span>
        </article-element>
        <course-element video="4" onderwerpen="2" projecten="6" src="img/courses/course_html5.svg" href="/course-html5">
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
            <span slot="title"><SEO</span>
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

customElements.define('content-developer-view', ContentDeveloperView);
