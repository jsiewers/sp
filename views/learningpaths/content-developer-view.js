import {BaseLearningpathView} from './base-learningpath-view.js';
import {html} from 'lit-element';




class ContentDeveloperView extends BaseLearningpathView {


    render() {
        return html `
        <article-head img="../img/learningpaths/content-developer.svg">
            <span slot="author">Jan Jaap Siewers</span>
            <span slot="date">02-03-2021</span>
            <span slot="header">Content developer</span>
        </article-head>
        <section>
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

        ${this.getCourses(["GIT", "ADOBE_GD", "HTML-5", "CSS", "SCRUM", "GITHUB", "JS", "WP","SEO"])}

        </section>

        `;
    }
}

customElements.define('content-developer-view', ContentDeveloperView);
