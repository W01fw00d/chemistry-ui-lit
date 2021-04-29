import { html } from 'lit-html';
import './custom-element.js';

export default {
  title: 'Atoms/Buttons/Text',
  component: 'text-button',
  argTypes: {
    styleMode: { control: { type: 'select', options: ['dark', 'light'] } },
  },
};

function Template({ text, children, className, styleMode }) {
  // TODO: How to change storybook UI between dark and light mode?

  const handleClick = () => {
    // TODO: add storybook actions
    console.log('Clicked on Storybook');
  };

  return html`
    <div
      style="display: flex;align-items: center;justify-content: center; margin: 20px"
    >
      <text-button
        class=${className}
        styleMode=${styleMode || 'dark'}
        .handleClick=${handleClick}
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
  children: content => content,
  className: 'hidden',
};
