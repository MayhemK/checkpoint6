<script setup>
import { AppState } from '@/AppState.js';
import AccountComp from '@/components/AccountComp.vue';
import Feed from '@/components/Feed.vue';
import { computed, onMounted } from 'vue';
import { feedService } from '@/services/FeedService.js';
import { Pop } from '@/utils/Pop.js';

const account = computed(() => AppState.account)
const posts = computed(() => AppState.posts)

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
  <section class="container">
    <div class="row">
      <div class="col-md-3">
        <AccountComp v-if="account" :account="account" />
      </div>
      <div class="col-md-6">
        <div v-for="post in posts" :key="post.id" class="row">
          <div class="col-12">
            <Feed :postProp="post" />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <p>ad</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
