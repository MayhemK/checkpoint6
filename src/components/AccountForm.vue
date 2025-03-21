<script setup>
import { accountService } from '@/services/AccountService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableAccountData = ref({
  name: '',
  bio: '',
  coverImg: '',
  picture: '',
  resume: '',
  graduated: false,
})

async function updateAccount() {
  try {
    await accountService.updateAccount(editableAccountData.value)
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>

</template>


<style lang="scss" scoped></style>