<template>
  <div class="navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="sample">Sample</router-link> |
    <router-link to="velha">Jogo da velha</router-link>
  </div>
</template>

<style lang="scss" scoped>
.navbar{
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  a {
    padding: 5px;
  }
}
</style>