import themeToggle from "@/components/theme-toggle.vue";
import { expect } from "@storybook/jest";

import { userEvent, waitFor, within } from "@storybook/testing-library";
export default {
  title: "Componentes/Theme-Toggle",
  component: themeToggle,
  parameters: {
    docs: {
      description: {
        component: "Componente de toggle usado para tema",
      },
    },
  },
  argTypes: {
    value: {
      description: "Evento para v-model",
      default: false,
    },
    input: {
      action: "input",
      description: "Evento para v-model",
      control: {
        type: null,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { themeToggle },
  template: '<theme-toggle @input="input" v-bind="$props" />',
});
export const Base = Template.bind({});

Base.parameters = {
  docs: {
    source: {
      code: '<p-theme-toggle v-model="var" />',
      language: "html",
      type: "auto",
    },
  },
};

Base.play = async ({ args, canvasElement }) => {
  // const canvas = within(canvasElement);

  await waitFor(() => expect(args.input).toHaveBeenCalled());
};
