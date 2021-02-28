import {BaseLearningpathView} from '../learningpaths/base-learningpath-view.js';
import { html, css } from 'lit-element';
import { mainStyles } from '../../styles/main-styles.js';
import { routes } from '../../data/routes.js';
import { externalRoutes } from '../../data/external-routes.js';

export class CourseIndex extends BaseLearningpathView {
    static get properties() {
      return {
        base_url: { type: String },
        img: { type: String},
        extroutes: { type: Array }
      }
    }

      static get styles() {
        return [ mainStyles,
        css `
          a {
            color:var(--c4);
            text-decoration:none;
            font-weight:500;
            vertical-align:top;
          }

          ::slotted {
            font-weight:700;
          }

          a.same-page {
            font-weight:700;
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

      constructor() {
        super();
          this.img = "/img/courses/course_all_head.svg"
          this.base_url = "/courses"
          this.extroutes = externalRoutes
          this.linkFilter = (query) => {
            let selectedlinks = this.extroutes.filter(extroute => {
              let order = query.indexOf(extroute.course)
              if (order !== -1) {
                  extroute.order = order;
                  return true;
              }
            })
          return selectedlinks.sort((a,b) => a.order - b.order);
        };
      }

    getExternalLinks(course_id) {
      return [ html `<h4>Externe links</h4>`,
        this.linkFilter(course_id).map(course => html`
        <link-item href="${ course.path }"><span slot="link">${ course.label }</span></link-item>
        ` )];
    }

    navigation(course_id) {
      console.log(course_id);
      return html`
      <card-element>
        <span slot="title">Links</span>
        <span slot="text">
          ${this.getInternalLinks(routes)}
          ${this.getExternalLinks(course_id)}
      </span>
      <span slot="link"> </span>
    </card-element>
    `
    }

    getInternalLinks(routes) {
      let urls = []
      let filteredRoutes = routes.filter(route => (route.path.slice(0, this.base_url.length) == this.base_url))
      filteredRoutes.forEach((item, i) => {
        let my_label = (location.pathname == item.path) ? html `<b>${item.label}</b>` : html `${item.label}`;
        urls.push(html `<link-item href="${item.path}"><span slot="link">${my_label}</span></link-item>`)
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
