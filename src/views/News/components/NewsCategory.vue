<template>
  <div class="category">
    <ul class="category__list">
      <li
      @click="onClick(item.id)"
      :class="{ active: activeId === item.id }"
      v-for="item in tabs"
        :key="item.id">
          {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeId = ref(1)
const onClick = (id) => {
  activeId.value = id
}

  const tabs = [
    {
      id: 1,
      name: '最新',
      path: '/news',
    },
    {
      id: 2,
      name: '新闻',
      path: '/news',
    },
    {
      id: 3,
      name: '公告',
      path: '/news',
    },
    {
      id: 4,
      name: '活动',
      path: '/news',
    },
  ]
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  height: 120px;
  background: rgb(240, 240, 240);
  .category__list {
    display: flex;
    align-items: center;
    li {
      width: 155px;
      height: 36px;
      margin-left: 20px ;
      border-radius: 4px;
      cursor: pointer;
      background: rgb(207, 208, 209);
      display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
      &:first-child {
        margin-left: 0;
      }
      &.active {
        background: #000;
        color: #F4D8A8;
      }
      &:hover {
        background: #000;
        color: #F4D8A8;
      }
    }
  }
}

</style>