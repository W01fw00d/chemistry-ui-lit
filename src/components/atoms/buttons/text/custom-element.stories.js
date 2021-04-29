import { html } from 'lit-html';
import './custom-element.js';

export default {
  title: 'TextButton',
  component: 'text-button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <text-button
      style="--chemistry-ui-lit-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </text-button>
  `;
}

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
};
