import Vue from "vue";
import Vuex from "vuex";
import topics from "./topics";
import topic from "./topic";
import user from "./user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    topics,
    topic,
    user
  }
});

export default store;
