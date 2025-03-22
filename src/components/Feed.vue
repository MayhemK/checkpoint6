<script setup>
import { AppState } from '@/AppState.js';
import { feedService } from '@/services/FeedService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const posts = computed(() => AppState.posts)

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
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div>{{ posts.creatorId }}</div>
      </div>
    </div>
  </section>

</template>


<style lang="scss" scoped></style>