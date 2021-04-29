import { html } from 'lit-html';
import './custom-element.js';

export default {
  title: 'TextButton',
  component: 'text-button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ children, backgroundColor }) {
  const handleClick = () => {
    console.log('Clicked on Storybook');
  };

  return html`
    <text-button
      style="--background-color: ${backgroundColor || 'white'}"
      class="storybook-example"
      .handleClick=${handleClick}
    >
      ${children}
    </text-button>
  `;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Text Button',
};
