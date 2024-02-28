<template>
  <header class="header">
      <div class="header__nav">
        <div class="header__nav--cut"></div>
        <div class="header__nav--full"></div>
    <div class="header__menu">
          <a href="javascript:;">首页</a>
					<a href="javascript:;">新闻</a>
					<a href="javascript:;">角色</a>
					<a href="javascript:;">世界</a>
					<a href="javascript:;">漫画</a>
					<a href="javascript:;">社区</a>
					<a href="javascript:;">赛事</a>
					<a href="javascript:;">充值中心</a>
          <div class="header__bar"></div>
    </div>
    </div>
    <div class="header__my">
      <a href="javascript:;">
					<span>成长关爱系统</span>
					<img
						src="@/assets/img/love.png"
						alt="" />
				</a>
				<a
					href="javascript:;"
					class="login">
					<span>登 录</span>
					<img
						src="@/assets/img/my.png"
						alt="" />
				</a>
    </div>
  </header>
</template>

<script>

</script>

<style lang='scss' scoped>
.header {
	position: fixed;
  display: flex;
	width: 100%;
  height: 66px;
  top: 0;
  left: 0;
	z-index: 999;
	padding-left: 70px;
	padding-right: 30px;
	justify-content: space-between;
	align-items: center;
	font-size: 17px;
  min-width: 1280px;
	color: #ccc;
  background: rgba(17, 17, 17, 0.75);
}

.header__nav {
	display: flex;
	align-items: center;
}

.header__nav--cut {
	background: url(@/assets/img/music.png);
	width: 30px;
	height: 30px;
	cursor: pointer;
	background-size: 100% 100%;
}
.header__nav--full {
	background: url(@/assets/img/logo-header.png) no-repeat;
	width: 127px;
	height: 66px;
	margin: 0 25px;
	background-position-x: center;
  
}

.header__menu {
  position: relative;
	display: flex;
	height: 66px;
	align-items: center;
}
.header__menu a {
  display: block;
	padding: 0 17px;
	letter-spacing: 3px;
}

.header__menu a.active,
.header__menu a:hover {
	color: #fff;
	text-shadow: 0 0 10px #69e0ff,
		0 0 20px #69e0ff,
		0 0 40px #69e0ff;
}
.header__bar {
	position: absolute;
	top: 0px;
	left: 15px;
	width: 40px;
	height: 5px;
	background: rgb(105, 224, 255);
}
.header__my {
	display: flex;
	align-items: center;
}

.header__my a {
	margin-right: 20px;
	display: flex;
	align-items: center;
	transition: all 0.3s;
}

.header__my a:nth-child(2) {
	margin-right: 0;
}

.header__my a:nth-child(2) {
	margin-right: 0px;
}

.header__my .login {
	padding: 0 10px;
}

.header__my img {
	margin-left: 18px;
	width: 27px;
	height: 27px;
	opacity: 0.6; //图像透明度
}

.header__my a:hover {
	color: #fff;
}

.header__my a:hover img {
	opacity: 1;
}
</style>