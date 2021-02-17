import {LitElement, html, css, unsafeCSS} from 'lit-element';
import { mainStyles } from '../styles/main-styles.js';

class ArticleHead extends LitElement {
  static get properties() {
      return {
          img: {
              attribute: true
          }
      }
    };



    static get styles() {
        return [
          mainStyles,
          css`
            h1 {
                font-size: calc(1em * var(--type-scale) * 2.8);
                font-weight: 700;
                color: var(--c4);
                margin-block-start: 1rem;
                margin-block-end: 1rem;
                line-height: calc(var(--type-scale) * 1.2)
            }

            article {
              background-repeat: no-repeat;
              background-size:cover;

            }

            section {
                display: grid;
                grid-template-areas:
                'author date'
                'header header';
                grid-column-gap:2rem;
                grid-row-gap:0px;
                grid-template-rows: 1fr 1fr;
                grid-template-columns: 1fr 1fr;
            }

            section > #author {
                grid-area: author;
                flex-grow:1;
                font-size: calc(1em * var(--type-scale) * 0.8);
                font-style:italic;
            }

            section > #date {
                grid-area: date;
                text-align:right;
                flex-grow:1;
                font-size: calc(1em * var(--type-scale) * 0.8);
                font-style:italic;
            }

            section > h1 {
                margin-top:2rem;
                grid-area: header;
                color:#fff;
            }`
        ];
      }

    render() {
        return html`
      <article style="background-image:url('${ this.img }');">
        <section>
          <p id="author">Auteur: <slot name="author">Author</slot></p>
          <p id="date">Datum: <slot name="date">Date</slot></p>
          <h1 id="header"><slot name="header">Article head</slot></h1>
          </section>
      </article>
        `;
    }
}
customElements.define('article-head', ArticleHead);
