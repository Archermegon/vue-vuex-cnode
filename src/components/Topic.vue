<template>
  <div class="topic-content">
    <div class="topic all-part" v-if="topic">
      <h3>{{topic.title}}</h3>
      <ul class="intro">
        <li>
          <p>作者：{{topic.author.loginname}}</p>
        </li>
        <li>
          <p>{{topic.visit_count}}次浏览</p>
        </li>
      </ul>
      <article>
        <vue-markdown :source="topic.content"></vue-markdown>
      </article>
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Comments from "./Comments";
export default {
  name: "topic",
  components: {
    VueMarkdown,
    Comments
  },
  created() {
    this.$store.dispatch("getTopic", this.id);
  },
  computed: {
    topic() {
      return this.$store.state.topic.topic;
    },
    id() {
      return this.$route.params.id;
    }
  }
};
</script>

<style>
.topic-content {
  width: 70%;
}
.all-topic {
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}
.topic > h3 {
  background: #333;
  color: #f6f6f6;
  line-height: 50px;
  padding-left: 10px;
}
.topic article {
  padding: 10px;
}
.topic article img {
  width: 100%;
}
.intro {
  display: flex;
  list-style: initial;
  color: #aaa;
  font-size: 13px;
  padding-left: 40px;
  width: 100%;
  margin-top: 10px;
}
.intro > li {
  margin-right: 10px;
  width: 150px;
}
</style>
