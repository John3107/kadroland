<template>
  <div class="body">
    <Categories/>
    <Main/>
  </div>
</template>

<script>
import Categories from './categories/Categories'
import Main from './main/Main'
import {mapMutations} from 'vuex'

export default {
  name: 'App-Body',
  components: {
    Categories,
    Main
  },
  beforeCreate() {
    this.$store.commit('setInitialAppearance');
  },
  methods: {
    ...mapMutations(["setInitialAppearance"])
  }
}
</script>

<style scoped>
.body {
  display: flex;
  padding: 0 10.5% 56px;
  background: #F5F5F5;
}
</style>
