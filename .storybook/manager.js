import { addons } from 'storybook-prebuilt/addons.js';
import { create } from 'storybook-prebuilt/theming/create.js';
//import brandImage from '../public/chemistry-ui-logo.png';

addons.setConfig({
  theme: create({
    base: 'dark',

    brandTitle: 'Chemistry-UI',
    brandUrl:
      'https://github.com/W01fw00d/chemistry-ui-lit/blob/master/README.md',
    // brandImage, //TODO: how to import the brandImage?
  }),
});
