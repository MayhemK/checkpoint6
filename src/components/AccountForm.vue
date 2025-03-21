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
  <div>
    <h3>Change Account details here!</h3>
    <form @submit.prevent="updateAccount()">
      <div>
        <label for="accountName">Account Name</label>
        <input v-model="editableAccountData.name" type="text" name="name" id="accountName" required maxlength="60">
      </div>
      <div>
        <label for="accountBio">Account Bio</label>
        <textarea v-model="editableAccountData.bio" name="bio" id="accountBio" maxlength="500"></textarea>
      </div>
      <div>
        <label for="accountPicture">Account Picture</label>
        <input v-model="editableAccountData.picture" type="url" id="accountPicture" name="picture" maxlength="500">
      </div>
      <div>
        <label for="accountCoverImg">Account Cover Image</label>
        <input v-model="editableAccountData.coverImg" type="url" name="coverImg" id="accountCoverImg" maxlength="500">
      </div>
      <div>
        <label for="accountResume">Account Resume</label>
        <input v-model="editableAccountData.resume" type="url" id="accountResume" name="resume" maxlength="500">
      </div>
      <div>
        <label for="accountGraduated">Graduated?</label>
        <input v-model="editableAccountData.graduated" type="checkbox" id="accountGraduated" name="graduated">
      </div>
      <div class="text-end">
        <button class="btn btn-success" type="submit">submit</button>
      </div>
    </form>
  </div>

</template>


<style lang="scss" scoped></style>