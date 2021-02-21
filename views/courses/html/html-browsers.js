import { html } from 'lit-element';
import { HtmlIndex } from './html-index.js'

class HtmlBrowsers extends HtmlIndex {
    render() {
        return  html`
        <article-head img="${ this.img }">
          <span slot="author">Jan Jaap Siewers</span>
          <span slot="date">20-02-2021</span>
          <span slot="header">HTML5</span>
        </article-head>
        <section>
          <article-element>
            <span slot="header">Hoe werkt een browser met HTML</span>
            <span slot="col-1">
            <bread-crumbs loc="${location}"></bread-crumbs>


          </span>
            <span slot="col-2">

              ${ this.navigation() }

            </span>
          </article-element>
        </section>
      `
    }
}

customElements.define('html-browsers', HtmlBrowsers);
