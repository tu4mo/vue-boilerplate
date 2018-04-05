<template>
  <div>
    <h2>Home</h2>
    <button @click="add">Count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.counter
    }
  },
  methods: {
    add() {
      this.$store.commit('increment')
    }
  }
}
</script>
