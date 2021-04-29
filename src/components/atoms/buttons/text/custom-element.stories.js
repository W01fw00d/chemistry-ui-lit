import { html } from 'lit-html';
import './custom-element.js';

export default {
  title: 'Atoms/Buttons/Text',
  component: 'text-button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ text, children, backgroundColor }) {
  // TODO: add actions
  // TODO: add style modes: dark and light

  const handleClick = () => {
    console.log('Clicked on Storybook');
  };

  return html`
    <div
      style="display: flex;align-items: center;justify-content: center; margin: 20px"
    >
      <text-button
        style="--background-color: ${backgroundColor || 'white'}"
        class="storybook-example"
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
};

export const HalfBold = Template.bind({});
HalfBold.args = {
  // text: 'Text Button',
  children: () => html`<span style="font-weight: 900;">Text</span> Button`,
};
