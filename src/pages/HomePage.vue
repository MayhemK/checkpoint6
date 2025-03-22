<script setup>
import { AppState } from '@/AppState.js';
import AccountComp from '@/components/AccountComp.vue';
import Feed from '@/components/Feed.vue';
import { computed } from 'vue';

const account = computed(() => AppState.account)
const posts = computed(() => AppState.posts)




</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-md-3">
        <AccountComp v-if="account" :account="account" />
      </div>
      <div class="col-md-6">
        <Feed />
      </div>
      <div class="col-md-3">
        <p>ad</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
