<template>
  <div class="details">
    <div class="body">
      <DetailsTopbar />
    <DetailsArticle />
    </div>
  </div>
</template>

<script setup>
import DetailsTopbar from '@/views/News/details/components/DetailsTopbar.vue'
import DetailsArticle from '@/views/News/details/components/DetailsArticle.vue'
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  width: 100%;
  height: 100%;
  background: #4D6E80 url(@/assets/img/detail-bg.jpg) no-repeat top center;
  background-size: 100%;
}
.body {
  width: 900px;
  margin: 0 auto;
}
</style>

