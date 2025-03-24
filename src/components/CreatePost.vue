<script setup>
import { postService } from '@/services/PostService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';



const editablePostData = ref({
  body: '',
  imgUrl: ''
})

async function makePost() {
  try {
    await postService.makePost(editablePostData.value)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <form @submit.prevent="makePost()">
    <div>
      <label for="postBody" class="form-label">Post Content</label>
      <input v-model="editablePostData.body" type="text" class="form-control" id="postBody" maxlength="300" required>
    </div>
    <div>
      <label for="postImg" class="form-label">Post Image</label>
      <input v-model="editablePostData.imgUrl" type="url" class="form-control" id="postImg" maxlength="400" required>
    </div>
    <button type="submit" class="btn btn-green">Post!</button>
  </form>
</template>


<style lang="scss" scoped>
.btn-green {
  background-color: #00fe4d;
  color: black;
}
</style>