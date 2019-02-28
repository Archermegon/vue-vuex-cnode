<template>
  <header>
    <div class="headList">
      <li>
        <router-link to="/">MEGON</router-link>
      </li>
      <li>
        <router-link to="/">未读消息</router-link>
      </li>
      <li>
        <router-link to="/">新手入门</router-link>
      </li>
      <li v-if="!isLog">登录</li>
      <li v-else @click="logOut">退出</li>
    </div>
  </header>
</template>

<script>
export default {
  name: "headList",
  computed: {
    isLog() {
      return this.$store.state.user.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
    }
  },
  watch: {
    isLog() {
      return sessionStorage.logname;
    }
  }
};
</script>

<style>
.headList {
  display: flex;
  line-height: 60px;
  background: #333;
  color: #666;
  list-style: none;
}
.headList > li {
  margin-left: 40px;
}
.headList a {
  color: #666;
}
.headList > li:nth-child(1) > a {
  font-weight: bold;
  color: #f4f4f4;
}
</style>
