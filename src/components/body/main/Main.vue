<template>
  <div class="main">
    <div class="title">Усі відео</div>
    <FilterMenu/>
    <div class="show-more">
      <img :src="require('@/assets/show-more-icon.svg')" alt="show more"/>
      <span class="show-more-text">Показати ще...</span>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import FilterMenu from './FilterMenu'
import Pagination from './Pagination'

export default {
  name: 'App-Body-Main',
  components: {
    FilterMenu,
    Pagination
  },
  // computed: {
  //   ...mapGetters({
  //     categories: "getCategories"
  //   })
  // }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.title {
  font-weight: 300;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  color: #3F3F3F;
  border-bottom: 1px #C4C4C4 solid;
  padding: 19px 0 9px;
}

.show-more {
  display: inherit;
  justify-content: center;
  align-items: center;
  margin: 64px 0 29px;
}

.show-more-text {
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #000;
  margin-left: 9px;
}
</style>
