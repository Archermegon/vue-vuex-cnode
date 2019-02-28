<template>
  <div class="left-content">
    <div class="self">
      <p>个人信息</p>
      <div class="self-content" v-if="user">
        <router-link :to="`/user/${user.logname}`">
          <div class="avatar">
            <img :src="user.avator" alt>
          </div>
        </router-link>
        <p>{{user.logname}}</p>
      </div>
      <div class="login" v-else>
        <input type="text" v-model="token">
        <button @click="login">登录</button>
      </div>
    </div>
    <div class="releaseBtn">
      <button>发布话题</button>
    </div>
    <Ad></Ad>
  </div>
</template>

<script>
import Ad from "./Ad";
export default {
  name: "self",
  components: {
    Ad
  },
  created() {
    this.$store.dispatch("getUser", this.token);
  },
  data: () => ({
    token: ""
  }),
  methods: {
    login() {
      if (this.token) {
        this.$store.dispatch("loginCnode", {
          token: this.token,
          clear: this.clear
        });
      }
    },
    clear() {
      this.token = "";
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    }
  },
  watcher: {
    user() {
      return this.$store.state.user.user;
    }
  }
};
</script>

<style>
.left-content {
  width: 28%;
  margin-left: 2%;
}
.self,
.releaseBtn {
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 10px;
}
.releaseBtn {
  margin-top: 20px;
  padding: 10px;
}
.self > p {
  line-height: 44px;
  background: #333;
  color: #666;
  padding-left: 15px;
}
.login > input {
  margin: 10%;
  width: 80%;
  height: 35px;
}
.login > button {
  margin: 0 auto;
}
.self-content {
  padding: 10px;
}
.avatar {
  width: 60px;
}
</style>
