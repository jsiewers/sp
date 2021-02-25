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
                align-self:end;
                font-size: calc(1em * var(--type-scale) * 2.8);
                margin-block-start: 0rem;
                margin-block-end: 0rem;
                line-height: calc(var(--type-scale) * 1.2)
            }

            div {
              background-repeat: no-repeat;
              background-position:center 0px;
              background-size:3880px;
            }

            section {
                display: grid;
            }

            section#header {
                box-sizing:border-box;
                grid-template-areas:
                'header header';
                height:280px;
                padding-bottom:1rem;
            }

            section#info {
              grid-template-areas:
              'author date';
              grid-column-gap:2rem;
              grid-row-gap:0px;
              grid-template-columns: 1fr 1fr;
            }

            section > #author {
                grid-area: author;
                font-size: calc(1em * var(--type-scale) * 0.8);
                font-style:italic;
            }

            section > #date {
                grid-area: date;
                text-align:right;
                font-size: calc(1em * var(--type-scale) * 0.8);
                font-style:italic;
            }

            section > h1 {
                grid-area: header;
                color:#fff;
            }`
        ];
      }

    render() {
        return html`
      <article>
        <div style="background-image:url('${ this.img }');">
          <section id="header">
            <h1 id="header"><slot name="header">Article head</slot></h1>
          </section>
        </div>
        <section id="info">
          <p id="author">Auteur: <slot name="author">Author</slot></p>
          <p id="date">Datum: <slot name="date">Date</slot></p>
        </section>
      </article>
        `;
    }
}
customElements.define('article-head', ArticleHead);
