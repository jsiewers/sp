import {BaseLearningpathView} from '../learningpaths/base-learningpath-view.js';
import { html, css } from 'lit-element';
import { mainStyles } from '../../../styles/main-styles.js';
import { routes } from '../../../data/routes.js';

export class CourseIndex extends BaseLearningpathView {
    static get properties() {
      return {
        base_url: { type: String },
        img: { type: String},
      }
    }

    constructor() {
      super();
      //this.location = location
      //const chapter_id = location.pathname.split("/")[2];
        this.img = "/img/courses/course_all_head.svg"
        this.base_url = "/courses"
    }

      static get styles() {
        return [mainStyles,
        css `
          a {
            color:var(--c4);
            text-decoration:none;
            font-weight:500;
            vertical-align:top;
          }
          fa-icon {
            padding-block-start:2px;
          }

          p {
            margin-block-start:0em;
            margin-block-end:0em;
          }
        `]
      };

    navigation() {
      return html`
      <card-element style="margin-bottom:1rem;">
        <span slot="title">Links</span>
        <span slot="text">
          ${this.createUrls(routes)}
      </span>
      <span slot="link"> </span>
    </card-element>
    `
    }

    createUrls(routes) {
      let urls = []
      let filteredRoutes = routes.filter(route => (route.path.slice(0, this.base_url.length) == this.base_url))
      filteredRoutes.forEach((item, i) => {
        console.log(item);
        urls.push(html `<p><fa-icon class="fas fa-angle-right"></fa-icon><a href="${item.path}">${item.label}</a></p>`)
      });
      return urls;
    }

    render() {
      return html`
      <article-head img="${ this.img }">
        <span slot="author">Jan Jaap Siewers</span>
        <span slot="date">15-02-2021</span>
        <span slot="header">Alle cursussen</span>
      </article-head>
      <section>
      <bread-crumbs loc="${location}"></bread-crumbs>
      ${this.getCourses(["GIT", "HTML-5", "CSS", "SCRUM", "GITHUB", "JS", "PHP", "MYSQL", "MYSQL_DESIGN", "OOPHP", "PHPFW", "LINUX", "DEVOPS", "ES6", "WPPHP", "WP"])}
      </section>
    `
    }
}

customElements.define('course-index', CourseIndex);
