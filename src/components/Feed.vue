<script setup>
import { AppState } from '@/AppState.js';
import { Post } from '@/models/Post.js';
import { computed } from 'vue';


const profile = computed(() => AppState.activeProfile)
defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div class="card txt-grn">
    <RouterLink :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
      <div class="card-header fs-4">🖼️ {{ postProp.creatorId }}</div>
    </RouterLink>
    <div class="card-body">
      <div>{{ postProp.body }}</div>
      <hr>
      <p>IMG GO HER</p>
      <!-- <img :src="postProp.imgUrl" alt=""> -->
      <hr>
      <p>👍: {{ postProp.likeIds }}</p>
    </div>
  </div>

</template>


<style lang="scss" scoped>
img {
  height: auto;
  width: 100%;
}

.txt-grn {
  color: #00fe4d;
}
</style>