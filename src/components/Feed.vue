<script setup>
import { Account } from '@/models/Account.js';
import { Post } from '@/models/Post.js';
import { feedService } from '@/services/FeedService.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
      <div class="card-header fs-5 align-items-end mb-0">
        <img :src="postProp.picture" alt="Profile Picture" class="prof-img d-flex justify-content-between">
        {{ postProp.creator }}
      </div>
    </RouterLink>
    <div>{{ new Date(postProp.createdAt).toLocaleString() }}</div>
    <div class="card-body fs-3 mt-0">
      <div>{{ postProp.body }}</div>
      <hr>
      <div class="text-decoration-underline">
        Likes:
        <div v-for="like in postProp.likes" :key="like.id" class="fs-6">
          <span>{{ like.name }}</span>
        </div>
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
  max-width: 64px;
  aspect-ratio: 1;
}

.txt-grn {
  color: #00fe4d;
}
</style>