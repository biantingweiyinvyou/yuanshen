<template>
  <div class="news">
    <ul class="news__list">
      <li
        class="list__item"
        v-for="item in items"
        :key="item.id"
        >
        <img :src="item.img" alt="">
        <h3>{{ item.name }}</h3>
      </li>
    </ul>
    <div class="news__more">
      <div class="news__load">加载更多</div>
    </div>
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
  },
]
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  background: rgb(240, 240, 240);
  .news__list {
    display: block;
  }
  .list__item {
    display: flex;
    margin-top: 10px;
    height: 170px;
    padding: 10px 20px;
    background: rgb(255, 255, 255);
    & img {
    width: 265px;
    height: 140px;
    text-align: center;
    }
    & h3 {
      font-size: 24px;
      color: #000;
    }
  }
  .news__more {
    display: flex;
    height: 280px;
    width: 100%;
    background: #f0f0f0 url('@/assets/img/bottom.jpg') no-repeat center;
    .news__load {
      width: 100%;
      height: 40px;
      margin-top: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      border-radius: 4px;
      cursor: pointer;
      background-color: #393b40;
      color: #f0f0f0;
      &:hover {
        background: rgb(92,94,98);
      }
    }
  }
}

</style>