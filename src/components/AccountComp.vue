<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const account = computed(() => AppState.account)


</script>


<template>
  <div class="card txt-grn">
    <div class="card-title">
      <img :src="account.picture" alt="">
      <h4 class="text-center">{{ account.name }}</h4>
    </div>
    <div class="card-body">
      <p>{{ account.bio }}</p>
      <p>{{ account.class }}</p>
      <p><a :href="account.github" class="mdi mdi-github fs-3 txt-grn">Github</a></p>
      <p><a :href="account.linkedin" class="mdi mdi-linkedin fs-3 txt-grn">LinkedIn</a></p>
      <p>Graduated? {{ account.graduated ? '✔️' : '❌' }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-width: 100%;

}

.txt-grn {
  color: #00fe4d;
}
</style>