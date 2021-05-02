import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./styles/index.css";

import "intersection-observer";
import Scrollama from "vue-scrollama";

Vue.component("Scrollama", Scrollama);

// setup a basic store
Vue.prototype.$store = {
  offset: 0.6,
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
