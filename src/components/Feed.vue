<script setup>
import { AppState } from '@/AppState.js';
import { Account } from '@/models/Account.js';
import { Post } from '@/models/Post.js';
import { feedService } from '@/services/FeedService.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
const account = computed(() => AppState.account)
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

async function deletePost(postId) {
  try {
    const confirmed = await Pop.confirm('yah sure?')
    if (!confirmed) { return }
    await feedService.deletePost(postId)

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
      <div>👍</div>
      <div class="text-decoration-underline">
        <div v-for="like in postProp.likes" :key="like.id" class="fs-6">
          <span>{{ like.name }}</span>
        </div>
      </div>
      <div class="text-end">
        <button v-if="postProp.creatorId == account?.id" @click="deletePost(postProp.id)" class="btn btn-green"
          type="button">Delete Post</button>
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

.btn-green {
  background-color: #00fe4d;
  color: black;
}
</style>