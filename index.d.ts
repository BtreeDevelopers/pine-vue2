import { PluginFunction, Component } from "vue";

export type pinePlugin<T> = PluginFunction<T>;

export default Component;
interface themeColors extends Record<String, String> {
  primary: String;
  secondary: String;
  error: String;
  warning: String;
  background: String;
  card: String;
}
interface Modal {
  name: String;
  locale: Component;
}
declare module "vue/types/vue" {
  interface Vue {
    $pine: {
      modal: {
        name: String;
        item: Object;
        modais: Modal[];
        open: (name: String, item?: Object) => void;
        close: () => void;
      };
      theme: "dark" | "light";
      colors: {
        dark: themeColors;
        light: themeColors;
      };
    };
  }
}

import app from "@/components/icon.vue";
import icon from "@/components/icon.vue";
import card from "@/components/card.vue";
import input from "@/components/input.vue";
import textfield from "@/components/text-field.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    pineApp: typeof app;
    pineIcon: typeof icon;
    pineCard: typeof card;
    pineTextField: typeof textfield;
  }
}
