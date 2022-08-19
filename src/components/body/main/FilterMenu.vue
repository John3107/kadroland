<template>
  <div class="filter-menu">
    <img :src="require('@/assets/filter-list.svg')" alt="filter"/>
    <img :src="require('@/assets/filter-table-icon.svg')" alt="filter-table" class="filter-table"/>
    <img :src="require('@/assets/filter-list-icon.svg')" alt="filter-list"/>
  </div>
</template>

<script>
export default {
  name: 'App-Body-Main-FilterMenu',
  components: {},
}
</script>

<style scoped>
.filter-menu {
  display: flex;
  justify-content: flex-end;
  margin: 9px 0 24px;
}

.filter-table{
  margin: 0 9px;
}
</style>
