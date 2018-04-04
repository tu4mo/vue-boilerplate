<template>
  <header>
    <h1>Vue Boilerplate</h1>
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/page">Page</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  align-items: center;
  background-color: purple;
  color: #fff;
  display: flex;
  padding: 1rem;
}

h1 {
  margin-right: 1rem;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 1rem;
}

.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
