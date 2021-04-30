import { html } from 'lit-html';
import { action } from 'storybook-prebuilt/addon-actions.js';

import './custom-element.js';

export default {
  title: 'Atoms/Buttons/Text',
  component: 'text-button',
  argTypes: {
    styleMode: { control: { type: 'select', options: ['dark', 'light'] } },
    className: { control: { type: 'select', options: ['hidden', ''] } },
  },
};

function Template({ text, children, className, styleMode }) {
  return html`
    <div
      style="display: flex;align-items: center;justify-content: center; margin: 20px"
    >
      <text-button
        class=${className}
        styleMode=${styleMode || 'dark'}
        .handleClick=${action('Text Button was clicked')}
      >
        ${children(text)}
      </text-button>
    </div>
  `;
}

export const Default = Template.bind({});
Default.args = {
  text: 'Text Button',
  children: content => content,
  styleMode: 'dark',
};

export const HalfBold = Template.bind({});
HalfBold.args = {
  children: () => html`<span style="font-weight: 900;">Text</span> Button`,
  styleMode: 'dark',
};

export const Hidden = Template.bind({});
Hidden.args = {
  text: 'Text Button',
  children: content => content,
  className: 'hidden',
};
