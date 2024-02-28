<template>
  <div class="social">
    <ul class="social__list">
      <li class="list__item list__item__wx">
        <p class="list__scan">关注我们</p>
        <img src="@/assets/img/wx.png" alt="">
        <p class="list__attention">扫码关注微信</p>
      </li>
      <li class="social__item">
        <span class=" iconfont icon-weibo"></span>
        官方微博
      </li>
      <li class="social__item">
        <span class=" iconfont icon-taptap"></span>
        TapTap
      </li>
      <li class="social__item">
        <span class=" iconfont icon-shequ"></span>
        官方社区
      </li>
    </ul>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.social {
  position: fixed;
  z-index: 1;
  width: 178px;
  height: 408px;
  right: 0;
  top: 50%;
  margin-top: -204px;
  text-align: center;
  background: rgba(255,255,255,0.9);
  .social__list {
    position: relative;
    padding: 0 2px 10px;
  }
  .list__item__wx img {
    width: 147px;
    height: 147px;
  }
  .list__item__wx .list__scan {
    font-size: 18px;
    margin: 10px auto 20px;
    color: #121212;
  }
  .list__attention {
    margin: 10px auto 20px;
  }
  .social__item {
    display: flex;
    width: 100%;
    font-size: 16px;
    align-items: center;
    justify-content: center;
  }
  .social__item span {
    font-size: 30px;
    padding: 0 20px 0 10px;
  }
  .social__item .icon-taptap {
    padding-left: 0;
  }
}
</style>
