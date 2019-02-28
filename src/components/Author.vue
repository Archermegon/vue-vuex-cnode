<template>
  <div class="left-content">
    <div class="self">
      <p>个人信息</p>
      <div class="self-content" v-if="user">
        <router-link :to="`/user/${user.loginname}`">
          <div class="avatar">
            <img :src="user.avatar_url" alt>
          </div>
        </router-link>
        <p>{{user.loginname}}</p>
      </div>
      <span v-else>加载中……</span>
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
  name: "author",
  components: {
    Ad
  },
  created() {
    if (this.id) {
      this.$store.dispatch("getAuthor", this.id);
    } else {
      this.$store.dispatch("getName", this.name);
    }
  },
  data: () => ({
    token: ""
  }),
  methods: {},
  computed: {
    user() {
      return this.$store.state.user.author;
    },
    id() {
      return this.$route.params.id;
    },
    name() {
      return this.$route.params.name;
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
