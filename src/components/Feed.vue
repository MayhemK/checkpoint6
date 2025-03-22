<script setup>
import { Post } from '@/models/Post.js';


defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div class="card txt-grn">
    <div class="card-header fs-4">{{ postProp.creatorId }}</div>
    <div class="card-body">
      <div>{{ postProp.body }}</div>
      <hr>
      <img :src="postProp.imgUrl" alt="">
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