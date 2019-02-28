import axios from "axios";

const user = {
  state: {
    user: null,
    author: null
  },
  mutations: {
    loginCnode(state, user) {
      state.user = user;
    },
    getAuthor(state, author) {
      state.author = author;
    }
  },
  actions: {
    loginCnode({ commit }, { id, clear }) {
      axios
        .post(`https://cnodejs.org/api/v1/accesstoken`, { accesstoken: id })
        .then(res => {
          console.log(res.data);
          sessionStorage.logname = res.data.loginname;
          sessionStorage.avator = res.data.avatar_url;
          const userInfo = {
            logname: sessionStorage.logname,
            avator: sessionStorage.avator
          };
          commit("loginCnode", userInfo);
          clear();
        });
    },
    getUser({ commit }) {
      if (sessionStorage.logname) {
        const userInfo = {
          logname: sessionStorage.logname,
          avator: sessionStorage.avator
        };
        commit("loginCnode", userInfo);
      }
    },
    getAuthor({ commit }, id) {
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
        commit("getAuthor", res.data.data.author);
      });
    },
    logOut({ commit }) {
      commit("loginCnode", null);
    },
    getName({ commit }, name) {
      axios.get(`https://cnodejs.org/api/v1/user/${name}`).then(res => {
        console.log(res.data.data);
        commit("getAuthor", res.data.data);
      });
    }
  }
};
// cce1fdc4-7f46-4ffa-b0ae-0f405488f548
export default user;
