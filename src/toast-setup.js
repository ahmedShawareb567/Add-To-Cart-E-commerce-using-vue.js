import Vue from "vue";
import Toasted from "vue-toasted";

let Options = {
  position: "bottom-right",
  duration: 1000,
  className: "currentToast",
  containerClass: "containerToast",
  keepOnHover: true,
  iconPack: "custom-class",
  icon: "fa fa-thumbs-up",
  type: "success",
  singleton: "true"
};
Vue.use(Toasted, Options);
