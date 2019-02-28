<template>
  <div class="ad-content">
    <ul class="adList">
      <li>
        <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
          <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt>
        </a>
      </li>
      <li>
        <a
          href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs"
        >
          <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt>
        </a>
      </li>
      <li>
        <a href="https://0x7.me/T4BdE">
          <img src="https://static.cnodejs.org/FvSQHGgGVh_tkomqIFQ0MDEH9wrg" alt>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ad"
};
</script>

<style>
.ad-content {
  margin-top: 10px;
}
.adList {
  padding: 10px;
  background: #fff;
  border-radius: 5px;
}
.adList > li:nth-child(1) {
  margin-top: 0;
}
.adList > li {
  margin-top: 10px;
}
</style>
