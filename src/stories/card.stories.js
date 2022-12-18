import themeToggle from "@/components/theme-toggle.vue";

export default {
  title: "Componentes/Theme-Toggle",
  component: themeToggle,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: { input: { action: "input" } },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { themeToggle },
  template: '<theme-toggle @input="input" v-bind="$props"  />',
});
export const Base = Template.bind({});
