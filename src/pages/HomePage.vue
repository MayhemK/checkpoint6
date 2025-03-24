<script setup>
import { AppState } from '@/AppState.js';
import AccountComp from '@/components/AccountComp.vue';
import Feed from '@/components/Feed.vue';
import { computed, onMounted, ref } from 'vue';
import { feedService } from '@/services/FeedService.js';
import { Pop } from '@/utils/Pop.js';
import CreatePost from '@/components/CreatePost.vue';
import BannerComp from '@/components/BannerComp.vue';

const account = computed(() => AppState.account)
const posts = computed(() => AppState.posts)
const page = ref(1)

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
async function getNewer() {
  try {
    page.value++
    const newPosts = await feedService.getNewer(page.value)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getOlder() {
  try {
    page.value--
    const newPosts = await feedService.getOlder(page.value)
  }
  catch (error) {
    Pop.error(error);
  }
}



</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-md-2">
        <AccountComp v-if="account" :account="account" />
        SearchBarHere
      </div>
      <div class="col-md-8">
        <CreatePost v-if="account" :account="account" />
        <div v-for="post in posts" :key="post.id" class="row">
          <div class="col-12">
            <Feed :postProp="post" />
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <button @click="getNewer()" class="btn btn-green">Newer</button>
          <button @click="getOlder()" class="btn btn-green">Older</button>
        </div>
      </div>
      <div class="col-md-2">
        <BannerComp />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.btn-green {
  background-color: #00fe4d;
  color: black;
}
</style>
