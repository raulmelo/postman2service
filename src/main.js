import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// yarn add prismjs
import "prismjs";
import "prismjs/themes/prism.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
