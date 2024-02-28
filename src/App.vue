<template>
  <LayoutHeader />
  <div class="layout-body">
    <router-view />
  </div>
  <LayoutFooter />
</template>

<script setup>
import LayoutHeader from '@/views/Layout/header/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/footer/LayoutFooter.vue'
</script>

<style scoped>
.layout-body {
  margin-top: 66px;
}
</style>
