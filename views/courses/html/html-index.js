import { LitElement, html, css } from 'lit-element';
import { mainStyles } from '../../../styles/main-styles.js';
import { routes } from '../../../data/routes.js';

export class HtmlIndex extends LitElement {
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
        this.img = "/img/courses/course_html5_head.svg"
        this.base_url = "/courses/html-5"
    }

      static get styles() {
        return [mainStyles,
        css `
          a {
            color:black;
          }
        `]
      };

    navigation() {
      return html`
      <card-element href="/course/html">
        <span slot="title">Courselinks</span>
        <span slot="text">
        <ul>
          ${this.createUrls(routes)}
        </ul>
      </span>
      <span slot="link"> </span>
    </card-element>
    `
    }

    createUrls(routes) {
      let urls = []
      console.log(location.pathname);
      console.log(this.base_url);
      let filteredRoutes = routes.filter(route => (route.path.slice(0, this.base_url.length) == this.base_url))
      filteredRoutes.forEach((item, i) => {
        urls.push(html `<li><a href="${item.path}">${item.label}</a></li>`)
      });
      console.log(urls);
      return urls;
    }

    render() {
      return html`
      <article-head img="${ this.img }">
        <span slot="author">Jan Jaap Siewers</span>
        <span slot="date">15-02-2021</span>
        <span slot="header">HTML5</span>
      </article-head>
      <section>
      <bread-crumbs loc="${location}"></bread-crumbs>
        <article-element>
          <span slot="header">Beginnen met Websites bouwen</span>
          <span slot="col-1">
          <h3>Doelgroep</h3>
          <h3>Leerdoelen</h3>
          <h3>Activiteiten</h3>
          <h3>Opbrengst</h3>
          <h3>Voorkennis</h3>
            <p></p>
          </span>
          <span slot="col-2">
            <h3>Wat ga je leren?</h3>
            <p></p>
            ${this.navigation()}
          </span>
        </article-element>
      </section>
    `
    }
}

customElements.define('html-index', HtmlIndex);
