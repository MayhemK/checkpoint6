<script setup>
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { profileService } from '@/services/ProfileService.js';
import { AppState } from '@/AppState.js';
import { logger } from '@/utils/Logger.js';
const account = computed(() => AppState.account)
const profile = computed(() => AppState.activeProfile)

const route = useRoute()
onMounted(() => {
  getProfileById()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profileService.getProfileById(profileId)
    logger.log('profile attempt', profileId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div class="about ">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <!-- <img :src="profile.coverImg" alt=""> -->
        </div>
      </div>
      <div class="row">
        <div class="col-3">

          <!-- <img :src="profile.picture" alt="">
          <p>{{ profile.name }}</p>
          <p>{{ profile.bio }}</p>
          <p>Graduated? {{ account.graduated ? '✔️' : '❌' }}</p> -->

        </div>
        <div class="col-9">
          AccountForm
        </div>
      </div>
    </section>

  </div>
</template>


<style lang="scss" scoped>
img {
  max-width: 100%;
  object-fit: cover;
}
</style>