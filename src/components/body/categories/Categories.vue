<template>
  <div class="categories">
    <Category v-for="(category, key) in categories" :key="key" :data="category"/>
  </div>
</template>

<script>
import Category from './Category'
import {mapGetters} from 'vuex'

export default {
  name: 'App-Body-Categories',
  components: {
    Category,
  },
  computed: {
    ...mapGetters({
      categories: "getCategories"
    })
  }
}
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  background: #FFF;
  padding: 24px 17px 362px 16px;
  width: 230px;
  margin-right: 32px;
}
</style>
