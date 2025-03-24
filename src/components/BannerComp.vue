<script setup>
import { AppState } from '@/AppState.js';
import { bannerService } from '@/services/BannerService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
onMounted(() => {
  getBanner()
})
const banner = computed(() => AppState.banner)

async function getBanner() {
  try {
    await bannerService.getBanner()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div v-for="banner in banner" :key="banner.title">
    <img :src="banner.tall" alt="">
  </div>
</template>


<style lang="scss" scoped>
img {
  max-height: 40dvh;
}
</style>