<template>
  <div>
    <h1>Hello<span class="test">!</span></h1>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/page">Page</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
h1 {
  color: red;

  .test {
    color: blue;
  }
}
</style>
