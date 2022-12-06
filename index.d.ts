import { PluginFunction, Component } from "vue";

export type pinePlugin<T> = PluginFunction<T>;

export default Component;

declare module "vue/types/vue" {
  interface Vue {
    $pine: {
      color: String;
    };
  }
}

import app from "@/components/icon.vue";
import icon from "@/components/icon.vue";
import div from "@/components/div.vue";
import input from "@/components/input.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    pineApp: typeof app;
    pineIcon: typeof icon;
    pineDiv: typeof div;
    pineInput: typeof input;
  }
}
