import Vue from "vue";

import app, { pinePlugin } from "../src/index";

Vue.use(pinePlugin);

export const decorators = [
  (story) => ({
    components: { story, app },
    template: "<app><story /></app>",
  }),
];

export const parameters = {
  // actions: { argTypesRegex: "^.*" },
  layout: "centered",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
