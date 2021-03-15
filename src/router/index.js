import Vue from "vue";
import VueGtm from "vue-gtm";
import VueRouter from "vue-router";

import routes from "./routes";


Vue.use(VueRouter);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */



Vue.mixin({
  data() {
    return {
      version: "1.0.01",
    };
  },
  methods: {
    notifyGreen(messages) {
      this.$q.notify({
        color: "secondary",
        position: "top",
        icon: "done",
        message: messages,
        timeout: 800
      });
    },
    notifyRed(messages) {
      this.$q.notify({
        color: "negative",
        position: "top",
        icon: "error",
        message: messages,
        timeout: 800
      });
    },
  }
});
export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
}
