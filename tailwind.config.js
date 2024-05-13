import base from './tailwindConfig/tailwind.base.config';
import plugins from './tailwindConfig/tailwind.plugins.config';
import theme from './tailwindConfig/tailwind.theme.config';

export default {
  ...base,
  ...plugins, 
  theme }