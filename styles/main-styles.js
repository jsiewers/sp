import { css } from 'lit-element';

export const mainStyles = css`
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-weight: 700;
      color: var(--c4);
      line-height: 1rem;
  }

  h2 {
      font-size: calc(1em * var(--type-scale) * 2);
      line-height: calc(1em * var(--type-scale) * 1.2);
  }

  h3 {
      font-size: calc(1em * var(--type-scale) * 1.4);
  }
  section {
    max-width:1090px;
    width: 80%;
    margin:auto;
  }`;
