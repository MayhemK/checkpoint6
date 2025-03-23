<script setup>
import { Account } from '@/models/Account.js';
import { Post } from '@/models/Post.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted, ref } from 'vue';

const userProfile = ref(null);

// const profile = computed(() => AppState.activeProfile)
const props = defineProps({
  postProp: { type: Post, required: true },
  userProp: { type: Account, required: true }
})


onMounted(async () => {
  await getUserData();
});
async function getUserData() {
  try {
    userProfile.value = await profileService.getProfileById(props.postProp.creatorId);
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div class="card txt-grn">
    <RouterLink :to="{ name: 'Profile', params: { profileId: postProp.creatorId } }">
      <div class="card-header fs-4">🖼️ {{ postProp.id }}</div>
    </RouterLink>
    <div class="card-body">
      <div>{{ postProp.body }}</div>
      <div>I am getting angry</div>
      <hr>
      <p>IMG GO HER</p>
      <img :src="postProp.imgUrl" alt="">
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