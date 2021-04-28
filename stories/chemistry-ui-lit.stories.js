import { html } from 'lit-html';
import '../src/chemistry-ui-lit.js';

export default {
  title: 'ChemistryUiLit',
  component: 'chemistry-ui-lit',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <chemistry-ui-lit
      style="--chemistry-ui-lit-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </chemistry-ui-lit>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
