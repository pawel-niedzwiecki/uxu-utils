import {addons} from '@storybook/addons';
import {create} from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'UXU',
    brandUrl: 'https://uxu.pl',
    brandTarget: '_self',
  })
});
