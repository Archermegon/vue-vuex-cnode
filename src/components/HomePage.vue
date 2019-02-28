<template>
  <div class="home-page" v-if="user">
    <div class="intro-part all-part">
      <h4>主页</h4>
      <div class="real">
        <div class="img">
          <img :src="user.avatar_url" alt>
        </div>
        <p>昵称：{{user.loginname}}</p>
        <p>{{user.score}} 积分</p>
        <p>github：{{user.githubUsername}}</p>
      </div>
    </div>
    <div class="recent-topics-part all-part">
      <h4>最近创建的话题</h4>
      <ul class="topicList">
        <li v-for="topic in user.recent_topics" :key="topic.id">
          <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="recent-topics-part all-part">
      <h4>最近参与的话题</h4>
      <ul class="topicList">
        <li v-for="topic in user.recent_replies" :key="topic.id">
          <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
  computed: {
    name() {
      return this.$route.params.name;
    },
    user() {
      return this.$store.state.user.author;
    }
  }
};
</script>

<style>
.home-page {
  width: 70%;
}

.real {
  padding: 10px;
}
.img {
  width: 60px;
  border-radius: 3px;
  overflow: hidden;
}
.real > p {
  font-size: 14px;
  line-height: 30px;
}
</style>
