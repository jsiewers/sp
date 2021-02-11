import {LitElement, html, css} from 'lit-element';
class ArticleHead extends LitElement {
    static get styles() {
        return css` 
        h1 {
            font-size: calc(1em * var(--type-scale) * 2.8);
            font-weight: 700;
            color: var(--c4);
            margin-block-start: 1rem;
            margin-block-end: 1rem;
            line-height: calc(var(--type-scale) * 1.2)
        }
       
       article {
            display: grid;
            grid-template-areas:
            'author date'
            'header header';
            grid-column-gap:2rem;
            grid-row-gap:0px;
            grid-template-rows: 1rem 1fr;
            grid-template-columns: 1fr 1fr;
        }
        
        article > #author {
            grid-area: author;
            flex-grow:1;
            font-size: calc(1em * var(--type-scale) * 0.8);
            font-style:italic;
        }
        
        article > #date {
            grid-area: date;
            text-align:right;
            flex-grow:1;
            font-size: calc(1em * var(--type-scale) * 0.8);
            font-style:italic;
      }
        
        article > h1 {
            margin-top:2rem;
            grid-area: header;
         }
    `};

    render() {
        return html`
      <article>
          <p id="author">Auteur: <slot name="author">Author</slot></p>
          <p id="date">Datum: <slot name="date">Date</slot></p>
          <h1 id="header"><slot name="header">Article head</slot></h1>
      </article>
        `;
    }
}
customElements.define('article-head', ArticleHead);
