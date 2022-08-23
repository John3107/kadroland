<template>
  <div class="filter-menu">
    <img :src="require('@/assets/filter-list.svg')" alt="filter"/>
    <FilterGrid :fillColor="appearance === 'grid' ? '#ED3434' : '#C4C4C4'"
                class="filter-grid" @click.native="toGridHandler"/>
    <FilterList :fillColor="appearance === 'list' ? '#ED3434' : '#C4C4C4'"
                class="filter-list" @click.native="toListHandler"/>
  </div>
</template>

<script>
import FilterGrid from "@/icons/FilterGrid";
import FilterList from "@/icons/FilterList";
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'App-Body-Main-FilterMenu',
  components: {
    FilterGrid,
    FilterList
  },
  computed: {
    ...mapGetters({
      appearance: "getAppearance"
    })
  },
  methods: {
    ...mapMutations(['setChangeAppearance']),
    toGridHandler() {
      this.setChangeAppearance('grid')
    },
    toListHandler() {
      this.setChangeAppearance('list')
    }
  }
}
</script>

<style scoped>
.filter-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 9px 0 24px;
}

.filter-grid {
  margin: 0 9px;
  cursor: pointer;
}

.filter-list {
  margin-top: 1.5px;
  cursor: pointer;
}
</style>
