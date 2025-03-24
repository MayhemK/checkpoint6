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
  Banner Ad
  <div>{{ banner }}</div>
</template>


<style lang="scss" scoped>
img {
  max-height: 10dvh;
}
</style>