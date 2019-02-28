<template>
  <div id="wrapper">
    <p>tip: 输入：cce1fdc4-7f46-4ffa-b0ae-0f405488f548 登录</p>
    <Header></Header>
    <div class="container">
      <router-view name="main"></router-view>
      <router-view name="left"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Footer,
    Header
  }
};
</script>

<style>
#wrapper {
  background: #f3f3f3;
}
.container {
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
}
</style>
