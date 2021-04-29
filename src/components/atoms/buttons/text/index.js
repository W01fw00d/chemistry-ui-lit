import { LitElement, html, css } from 'lit-element';

import { COLORS } from '../../../../styles/constants.css.js';

export class Text extends LitElement {
  static get properties() {
    return {
      class: { type: String },
      styleMode: { type: String },
      handleClick: {},
    };
  }

  static get styles() {
    const DARK = COLORS.DARK.BUTTON;
    const LIGHT = COLORS.LIGHT.BUTTON;

    // TODO: why & css anotation is not working here? find a shorter way for using > 1 class in same node as css selector
    return css`
      .text-button.dark {
        color: ${DARK.TEXT};
        background-color: ${DARK.BACKGROUND};
      }

      .text-button.light {
        color: ${LIGHT.TEXT};
        background-color: ${LIGHT.BACKGROUND};
      }

      .text-button.hidden {
        display: none;
      }
    `;
  }

  constructor() {
    super();
    this.handleClick = () => console.log('Text Button handle not found');
  }

  render() {
    return html`
      <button
        class=${`text-button ${this.styleMode} ${this.class}`}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}
