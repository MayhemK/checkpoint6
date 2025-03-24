<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

// function toggleTheme() {
//   theme.value = theme.value == 'light' ? 'dark' : 'light'
// }

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template>
  <nav class="navbar navbar-expand-md bg-black border-bottom border-vue jersey ">
    <div class="container gap-2">
      <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center txt-grn">
        <img class="navbar-brand" alt="logo" src="/favicon.jpg" height="65" />
        <b class="fs-4">CodePad</b>
      </RouterLink>
      <div class="collapse navbar-collapse " id="navbar-links">
        <ul class="navbar-nav">
          <li>

          </li>
        </ul>
        <!-- LOGIN COMPONENT HERE -->
        <div class="ms-auto">
        </div>
        <Login />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.bg-black {
  background-color: black;
}

.txt-grn {
  color: #00fe4d;
}

.jersey {
  font-family: "Jersey 15", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
}
</style>
