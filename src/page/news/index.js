import Vue from "vue";
import Tpl from "./template.vue";
import "@assets/style/main.scss";
import { Pagination } from "element-ui";
import { Empty } from "element-ui";
Vue.use(Empty);
Vue.use(Pagination);

new Vue({
  render:h => h(Tpl),
}).$mount("#app");
