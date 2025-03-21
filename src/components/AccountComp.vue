<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const account = computed(() => AppState.account)


</script>


<template>
  <img :src="account.picture" alt="">
  <p>{{ account.name }}</p>
  <p>{{ account.email }}</p>
  <p>{{ account.bio }}</p>
  <p>Graduated? {{ account.graduated ? '✔️' : '❌' }}</p>
</template>


<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>