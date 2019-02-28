import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./components/Home";
import Topic from "./components/Topic";
import Self from "./components/Self";
import Author from "./components/Author";
import HomePage from "./components/HomePage";

const router = new Router({
  routes: [
    {
      path: "/",
      components: {
        left: Self,
        main: Home
      }
    },
    {
      path: "/topic/:id",
      components: {
        left: Author,
        main: Topic
      }
    },
    {
      path: "/user/:name",
      components: {
        left: Author,
        main: HomePage
      }
    },
    {
      path: "/:tab",
      components: {
        left: Self,
        main: Home
      }
    }
  ],
  mode: "history"
});

export default router;
