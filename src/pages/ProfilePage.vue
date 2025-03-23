<script setup>
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { profileService } from '@/services/ProfileService.js';
import { AppState } from '@/AppState.js';
// import { logger } from '@/utils/Logger.js';
import { Post } from '@/models/Post.js';

// const account = computed(() => AppState.account)
const profile = computed(() => AppState.activeProfile)
const post = computed(() => AppState.userPosts)

const route = useRoute()
onMounted(() => {
  getProfileById()
  getPostsById()
})
const props = defineProps({
  postProp: { type: Post, required: true }
})
async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profileService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}
async function getPostsById() {
  try {
    const profileId = route.params.profileId
    await profileService.getPostsById(profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div class="about ">
    <div v-if="profile">

      <section class="container">
        <div class="row">
          <div class="col-12">
            <img :src="profile.coverImg" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="card">
              <div class="card-title">
                <img :src="profile.picture" alt="">
                <p class="text-center">{{ profile.name }}</p>
              </div>
              <div class="card-body">
                <p>{{ profile.bio }}</p>
                <p>{{ profile.class }}</p>
                <p :href="profile.github"><i class="mdi mdi-github"></i></p>
                <p :href="profile.linkedin"><i class="mdi mdi-linkedin"></i></p>
                <p>Graduated? {{ profile.graduated ? '✔️' : '❌' }}</p>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div v-if="post">
              {{ post }}
            </div>
            <div v-else>
              <p>No Posts!</p>
            </div>


          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-width: 100%;
  object-fit: cover;
}
</style>