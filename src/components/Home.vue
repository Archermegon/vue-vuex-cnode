<template>
  <div class="home">
    <ul class="type">
      <li :class="!tab?'active':''">
        <router-link to="/">全部</router-link>
      </li>
      <li :class="tab=== 'good' ?'active':''">
        <router-link to="/good">精华</router-link>
      </li>
      <li :class="tab==='share'?'active':''">
        <router-link to="/share">分享</router-link>
      </li>
      <li :class="tab==='ask'?'active':''">
        <router-link to="/ask">问答</router-link>
      </li>
      <li :class="tab==='job' ? 'active':''">
        <router-link to="/job">招聘</router-link>
      </li>
    </ul>
    <ul class="topicList">
      <li v-for="topic in topics" :key="topic.id">
        <router-link :to="`/topic/${topic.id}`">{{topic.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    this.$store.dispatch("getTopics", this.tab);
  },
  computed: {
    topics() {
      return this.$store.state.topics.topics;
    },
    tab() {
      return this.$route.params.tab;
    }
  },
  watch: {
    tab() {
      this.$store.dispatch("getTopics", this.tab);
    }
  }
};
</script>

<style>
.home {
  background: #fff;
  overflow: hidden;
  border-radius: 5px;
  width: 70%;
}
.type {
  display: flex;
  background: #333;
  padding: 10px;
}
.type a {
  margin-left: 20px;
  color: #666;
  padding: 5px;
}
.topicList {
  padding: 5px 20px;
}
.topicList > li {
  padding: 5px 10px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.topicList > li > a {
  color: #222;
}
.type > .active a {
  background: maroon;
  border-radius: 3px;
  color: #f6f6f6;
}
</style>
