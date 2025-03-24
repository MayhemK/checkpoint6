<script setup>
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { profileService } from '@/services/ProfileService.js';
import { AppState } from '@/AppState.js';
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
  <div class="about " v-if="profile">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <img :src="profile.coverImg" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="card txt-grn">
            <div class="card-title">
              <img :src="profile.picture" alt="">
              <p class="text-center">{{ profile.name }}</p>
            </div>
            <div class="card-body">
              <p>{{ profile.bio }}</p>
              <p>{{ profile.class }}</p>
              <a :href="profile.github"><i class="mdi mdi-github"></i></a>
              <p>
                <a :href="profile.linkedin"><i class="mdi mdi-linkedin"></i></a>
              </p>
              <p>Graduated? {{ profile.graduated ? '✔️' : '❌' }}</p>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div v-if="post">
            <div v-for="post in post" :key="post.id">
              <div class="card txt-grn">
                <div class="card-header fs-5 align-items-end">
                  <img :src="post.picture" alt="" class="prof-img d-flex justify-content-between">
                  {{ post.creator }}
                </div>
                <div class="fs-6">{{ new Date(post.createdAt).toLocaleString() }}</div>

                <div class="card-body fs-3 mt-0">
                  <div>{{ post.body }}</div>
                  <hr>
                  <img :src="post.imgUrl" alt="Image for post">
                  <hr>
                  <div class="text-decoration-underline">
                    Likes:
                    <div v-for="like in post.likes" :key="like.id" class="fs-6">
                      <span>{{ like.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
</template>


<style lang="scss" scoped>
img {
  max-width: 100%;
  object-fit: cover;
}

.prof-img {
  max-width: 64px;
  aspect-ratio: 1;
}

.txt-grn {
  color: #00fe4d;
}
</style>