<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: system-ui;
  margin: 0;
  padding: 0;
}

main {
  padding: 1rem;
}
</style>
