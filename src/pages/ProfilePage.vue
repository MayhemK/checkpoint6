<script setup>
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { profileService } from '@/services/ProfileService.js';

const route = useRoute()
onMounted(() => {
  getProfileById()
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
</script>


<template>
  <div>HI</div>
</template>


<style lang="scss" scoped></style>