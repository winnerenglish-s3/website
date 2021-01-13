import Vue from "vue";
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
var firebaseConfig = {
  apiKey: "AIzaSyAYLNGOWZtYLE0zS4nqVTVkvfilQ0QAraM",
  authDomain: "winnerenglish2-e0f1b.firebaseapp.com",
  databaseURL: "https://winnerenglish2-e0f1b.firebaseio.com",
  projectId: "winnerenglish2-e0f1b",
  storageBucket: "winnerenglish2-e0f1b.appspot.com",
  messagingSenderId: "771031700651",
  appId: "1:771031700651:web:a7f06b7595c5539a7b13ee",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.mixin({
  data() {
    return {
      version: "1.0.01",
    };
  },
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
