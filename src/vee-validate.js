import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver
} from "vee-validate/dist/vee-validate.full.esm";
import * as rules from "vee-validate/dist/rules";
import { extend, configure } from "vee-validate";
import { messages } from "vee-validate/dist/locale/en.json";

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
    dirty: ["is-dirty", "is-dirty"]
  }
});

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});

for (let [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
