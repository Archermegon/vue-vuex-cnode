import axios from "axios";

const topics = {
  state: {
    topics: []
  },
  mutations: {
    getTopics(state, topics) {
      state.topics = topics;
    }
  },
  actions: {
    getTopics({ commit }, tab) {
      if (!tab) {
        tab = "all";
      }
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}`).then(res => {
        commit("getTopics", res.data.data);
      });
    }
  }
};

export default topics;
