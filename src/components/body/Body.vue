<template>
  <div class="body">
    <Categories/>
    <Main/>
  </div>
</template>

<script>
import Categories from './categories/Categories'
import Main from './main/Main'

export default {
  name: 'App-Body',
  components: {
    Categories,
    Main
  }
}
</script>

<style scoped>
.body {
  display: flex;
  padding: 0 10.4%;
  background: #F5F5F5;
}
</style>
