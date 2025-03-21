<script setup>
import { feedService } from '@/services/FeedService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

onMounted(() => {
  getAllPosts()
})

async function getAllPosts() {
  try {
    await feedService.getAllPosts()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div>HI</div>

</template>


<style lang="scss" scoped></style>