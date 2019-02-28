import axios from "axios";

const topic = {
  state: {
    topic: null
  },
  mutations: {
    getTopic(state, topic) {
      state.topic = topic;
    }
  },
  actions: {
    getTopic({ commit }, id) {
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
        console.log(res.data.data);
        commit("getTopic", res.data.data);
      });
    }
  }
};

export default topic;
