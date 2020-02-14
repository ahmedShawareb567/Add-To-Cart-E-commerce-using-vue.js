import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./vee-validate.js";
import "./toast-setup.js";
//import "./server-mirage.js";

//  IMPORT SCSS FILES
import "./scss/mainStyle.scss";
import "./scss/media-query.css";

//BOOTSTRAP && JQUERY && POPPER.JS RENDERING
import("jquery");
import("bootstrap");
import("popper.js");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
