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
  github: '',
  linkedin: '',
  class: ''
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
  <div class="d-flex justify-content-between">
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
        <label for="accountGithub">Account Github</label>
        <input v-model="editableAccountData.github" type="url" id="accountGithub" name="github" maxlength="500">
      </div>
      <div>
        <label for="accountLinkedin">Account Linkedin</label>
        <input v-model="editableAccountData.linkedin" type="url" id="accountLinkedin" name="linkedin" maxlength="500">
      </div>
      <div>
        <label for="accountResume">Account Resume</label>
        <input v-model="editableAccountData.resume" type="url" id="accountResume" name="resume" maxlength="500">
      </div>
      <div>
        <label for="accountClass">Class</label>
        <input v-model="editableAccountData.class" type="text" id="accountClass" name="class" maxlength="500">
      </div>
      <div>
        <label for="accountGraduated">Graduated?</label>
        <input v-model="editableAccountData.graduated" type="checkbox" id="accountGraduated" name="graduated">
      </div>
      <div class="text-end">
        <button class="btn btn-green" type="submit">submit</button>
      </div>
    </form>
  </div>

</template>


<style lang="scss" scoped>
.btn-green {
  background-color: #00fe4d;
  color: black;
}
</style>