<template>
  <div class="topbar">
    <div class="topdar__list">
      <router-link to="/" class="list__item">首页</router-link>
      <span class="topbar__arraw">></span>
      <router-link to="/news" class="list__item">新闻</router-link>
      <span class="topbar__arraw">></span>
      <router-link to="/news" class="list__item">新闻</router-link>
      <span class="topbar__arraw">></span>
      <span class="topdar__title">「神铸赋形」祈愿：「法器·鹤鸣余音」「法器·千夜浮梦」概率UP！</span>
      <router-link to="/news" class="return">返回新闻列表</router-link>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  padding-top: 80px;
  width: 100%;
  height: 50px;
  align-items: center;
.topbar__list {
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 18px;
  line-height: 18px;
}
  .list__item {
    color: #808080;
  }
  .list__item:hover {
    color: #fff;
  }
  .topbar__arraw {
    display: inline-block;
    color: #aaa;
    width: 20px;
    text-align: center;
  }
  .topdar__title {
    color: #cfcfcf;
  }
  .return {
    display: inline-block;
    width: 138px;
    color: #ccc;
    text-align: right;
  }
}
</style>