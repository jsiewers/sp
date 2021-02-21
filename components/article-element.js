import {LitElement, html, css} from 'lit-element';
class ArticleElement extends LitElement {
    static get styles() {
        return css`



       article {
            display: grid;
            grid-template-areas:
            'header header'
            'col-1 col-2';
            grid-column-gap:2rem;
            grid-template-columns: 1fr 1fr;
        }

        article > #header {
            grid-area: header;
        }

        article > #col-1 {
            grid-area: col-1;
        }

        article > #col-2 {
            grid-area:col-2;
        }

        @media only screen and (max-width: 600px) {
            article {
              grid-template-areas:
              'header header'
              'col-1 col-1'
              'col-2 col-2'
            }

        }



    `};

    render() {
        return html`
      <article>
          <h2 id="header"><slot name="header">Header</slot></h2>
          <p id="col-1"><slot name="col-1">
              Tekst column 1
          </slot></p>
          <p id="col-2"><slot name="col-2">
              Teskt column 2
          </slot></p>
      </article>
        `;
    }
}
customElements.define('article-element', ArticleElement);
