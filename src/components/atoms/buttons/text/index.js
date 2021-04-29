import { LitElement, html, css } from 'lit-element';

import { COLORS } from '../../../../styles/constants.css.js';

export class Text extends LitElement {
  static get properties() {
    return {
      class: { type: String },
      handleClick: {},
    };
  }

  static get styles() {
    return css`
      button {
        color: red;
      }

      .storybook-example {
        /* background-color: var(--background-color); */
        color: ${COLORS.BUTTON.TEXT};
        background-color: ${COLORS.BUTTON.BACKGROUND};
      }
    `;
  }

  constructor() {
    super();
    this.handleClick = () => console.log('Text Button handle not found');
  }

  render() {
    return html`
      <button class=${this.class} @click=${this.handleClick}>
        <slot></slot>
      </button>
    `;
  }
}
