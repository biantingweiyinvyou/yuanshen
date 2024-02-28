<template>
  <div class="recommend">
    <ul class="recommend__index">
      <li
        class="recommend__item"
        v-for="item in items"
        :key="item.id"
      >
        <router-link to="/details">
        <div class="item__img">
        <img :src="item.img" alt="">
        </div>
        <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const items = [
    {
      id: 1,
      img: 'https://fastcdn.mihoyo.com/content-v2/hk4e/122096/84688fc7a094fd0757e6f9ab78c17afe_1614695288761725973.jpg',
      name: '「神铸赋形」祈愿：「法器·鹤鸣余音」「法器·千夜浮梦」概率UP！'
    },
    {
      id: 2,
      img: 'https://fastcdn.mihoyo.com/content-v2/hk4e/122095/b0d96991def5a0fc84fdf4b718d8a1ca_1205448827976225817.jpg',
      name: '《原神》「月草的赐慧」活动祈愿现已开启'
    },
    {
      id: 3,
      img: 'https://fastcdn.mihoyo.com/content-v2/hk4e/122094/42517463c8885534d610175434a108ca_4299718680894070762.jpg',
      name: '《原神》「云府鹤行」活动祈愿现已开启'
    }
  ]

</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 700px;
  background: url(@/assets/img/nav-bg.jpg);
}
.recommend__index {
  display: flex;
  padding-top: 80px;
  width: 100%;
  height: 450px;
}
.recommend__item {
  width: 420px;
  height: 450px;
  margin-right: 10px;
  box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.35);
  border-radius: 4px;
  background: rgba(18,18,18,0.8);
  .item__img {
    overflow: hidden;
    width: 380px;
    height: 190px;
    margin: 17px;
  }
  img {
    transition: all .3s;
    
    width: 100%;
  }
  img:hover {
    transform: scale(1.2);
  }
  p {
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
  &:last-child {
    margin-right: 0;
  }
}

</style>