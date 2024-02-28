<template>
  <div class="footer">
    <div class="footer__share">
      <i class="iconfont icon-weibo"></i>
			<i class="iconfont icon-yooxi"></i>
			<i class="iconfont icon-qq"></i>
			<i class="iconfont icon-share"></i>
    </div>
    <div class="footer__inner">
      <div class="footer__content">
        <img class="footer__logo--corp" src="@/assets/img/corp-logo.png" alt="">
        <div class="footer-line"></div>
        <img class="footer__logo--game" src="@/assets/img/game-logo.png" alt="">
      </div>
      <div class="footer__info">
        <div class="content__privacy">
          <a href="">用户协议</a>  |
					<a href="">隐私协议</a>  |
					<a href="">儿童隐私政策</a>  |
					<a href="">自律公约</a>  |
					<a href="">成长关爱</a>  |
					<a href="">关于我们</a>  |
					<a href="">联系我们</a>  | 
					<a href="">加入我们</a>  
        </div>
        <div class="content__advice">
          <p>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
          <p>沪公网安备31010402001113号 <span>|</span> 增值电信业务经营许可证：沪B2-20190555</p>
          <p>沪ICP备19018275号-4 <span>|</span> 沪网文〔2022〕1334-052号  国新出审【2019】2978号</p>
          <p>互联网违法不良信息举报邮箱: tousu@service.mihoyo.com 互联网违法不良信息举报电话: 021-60371750 （工作时间：每天10点 - 20点）</p>
          <p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听</p>
          <p>未成年成长关爱热线：021-60371740 （服务时间：8:00-23:00）</p>
          <p>© 2020 米哈游版权所有 <span>|</span> 上海米哈游影铁科技有限公司 客服电话：400-666-6312</p>
        </div>
        <div class="content__icon">
          <a href="javascript:;">
            <img src="@/assets/img/footer-icon1.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/img/footer-icon2.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/img/footer-icon3.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/img/footer-icon4.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/img/footer-icon5.png" alt="">
          </a>
          <a href="javascript:;">
            <img src="@/assets/img/footer-icon6.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    // position: fixed;
    // display: flex;
    // top: 66px;
    // left: 0;
    font-size: 14px;
    width: 100%;
    min-width: 1280px;
    min-height: 360px;
    background: #111;
}
.footer__share {
    display: flex;
    height: 52px;
    width: 100%;
    border-bottom: #1a1a1a solid 2px;
    color: rgb(112,112,112);
    align-items: center;
    justify-content: center;
}
.footer__share i {
  font-size: 32px;
  margin: 0 20px;
}
.footer__share .icon-qq {
  font-size: 28px;
}
.footer__share i:hover {
  color: #ccc;
}
.footer__inner {
  display: flex;
  background: #000;

  .footer__content {
      display: flex;
      width: 400px;
      margin: 0 auto;
      padding: 30px 0;
      align-items: center;
      color: #aaa;
  }
  .footer__logo--corp {
      height: 42px;
  }
  .footer-line {
      width: 1px;
      height: 28px;
      background: #666;
      margin-left: 25px;
      margin-right: 25px;
  }
  .footer__logo--game {
      height: 81px;
  }
  .footer__info {
    flex: 1;
    .content__privacy {
      color: #fff;
      margin: 28px 0;
    }
    .content__advice {
      color: #aaa;
    }
    .content__advice p span {
      margin: 0 10px;
    }
    .content__icon {
      display: flex;
      padding: 10px 0 30px 0;
    }
  }
}

</style>