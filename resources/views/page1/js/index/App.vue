<template>
  <div id="app">
    <div id="nav">
      <router-link to="/page1">Home</router-link> |
      <router-link to="/page1/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
