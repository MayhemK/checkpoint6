<script setup>
import { Account } from '@/models/Account.js';
import { Post } from '@/models/Post.js';
import { feedService } from '@/services/FeedService.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted, ref } from 'vue';

const userProfile = ref(null);

// const profile = computed(() => AppState.activeProfile)
const props = defineProps({
  postProp: { type: Post, required: true },
})

onMounted(() => {
  getAllPosts()
  getLikes()
})
async function getAllPosts() {
  try {
    await feedService.getAllPosts()
  }
  catch (error) {
    Pop.error(error);
  }
}
async function getLikes() {
  try {
    await feedService.getLikes()
  }
  catch (error) {
    Pop.error(error);
  }
}
// onMounted(async () => {
//   await getUserData();
// });
// async function getUserData() {
//   try {
//     userProfile.value = await profileService.getProfileById(props.postProp.creatorId);
//   }
//   catch (error) {
//     Pop.error(error);
//   }
// }
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
      <!-- <div v-for="likes in likes" :key="likes.id"> likes</div> -->
      <!-- <p>👍: {{ postProp.likes }}</p> -->
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