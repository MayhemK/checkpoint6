<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const account = computed(() => AppState.account)


</script>


<template>
  <!-- <img :src="account.picture" alt="">
  <p>{{ account.name }}</p>
  <p>{{ account.email }}</p>
  <p>{{ account.bio }}</p>
  <p>Graduated? {{ account.graduated ? '✔️' : '❌' }}</p> -->

  <div class="card">
    <div class="card-title">
      <img :src="account.picture" alt="">
      <h4 class="text-center">{{ account.name }}</h4>
    </div>
    <div class="card-body">
      <p>{{ account.bio }}</p>
      <p>Graduated? {{ account.graduated ? '✔️' : '❌' }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-width: 100%;

}
</style>