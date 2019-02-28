<template>
  <div class="comment-container">
    <div class="comments all-part" v-if="topic">
      <h4>{{comments.length}}回复</h4>
      <ul class="comment-content">
        <li v-for="com in comments" :key="com.id">
          <div class="text">
            <div class="post-avatar">
              <img :src="com.author.avatar_url" alt>
            </div>
            <p>
              <vue-markdown :source="com.content"></vue-markdown>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="reply-content all-part">
      <h4>添加回复</h4>
      <div class="reply-part">
        <textarea name v-model="val"></textarea>
        <button>回复</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  name: "comments",
  data: () => ({
    val: ""
  }),
  components: {
    VueMarkdown
  },
  computed: {
    topic() {
      return this.$store.state.topic.topic;
    },
    comments() {
      return this.$store.state.topic.topic.replies;
    }
  }
};
</script>

<style>
.comment-content > li {
  border-bottom: 1px solid #666;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.comment-content > li:last-child {
  border-bottom: none;
}
.text {
  display: flex;
}
.text > p {
  margin-left: 10px;
}
.post-avatar {
  width: 40px;
  overflow: hidden;
  border-radius: 3px;
}
.reply-part {
  padding: 10px;
  padding-bottom: 0;
}
.reply-part > textarea {
  resize: none;
  width: 100%;
  height: 60px;
  outline: none;
}
</style>
