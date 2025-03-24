<script setup>
import { Account } from '@/models/Account.js';
import { Post } from '@/models/Post.js';
import { feedService } from '@/services/FeedService.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted, ref } from 'vue';

const props = defineProps({
  postProp: { type: Post, required: true },
})

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
  <div class="card txt-grn">
    <RouterLink :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
      <div class="card-header fs-4"><img :src="postProp.picture" alt="" class="prof-img"> {{ postProp.creator }}</div>
    </RouterLink>
    <div class="card-body">
      <div>{{ postProp.body }}</div>
      <hr>
      <!-- <img :src="postProp.imgUrl" alt=""> -->
      <hr>
      <div v-for="like in postProp.likes" :key="like.id" class="">
        <span>{{ like.name }}</span>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
img {
  height: auto;
  width: 100%;
}

.prof-img {
  max-width: 96px;
  aspect-ratio: 1;
}

.txt-grn {
  color: #00fe4d;
}
</style>