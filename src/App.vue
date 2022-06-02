<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="q-pa-lg shadow-6">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  text-align: center;
  & > div {
    width: 400px;
    border-radius: 5px;
  }
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
