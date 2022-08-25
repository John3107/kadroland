<template>
  <div class="main">
    <div class="title">Усі відео</div>
    <FilterMenu/>
    <GridView :data="paginationVideos" v-if="appearance === 'grid'"/>
    <ListView :data="paginationVideos" v-else/>
    <div class="show-more" @click="videosCount += 1">
      <img :src="require('@/assets/show-more-icon.svg')" alt="show more"/>
      <span class="show-more-text">Показати ще...</span>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import FilterMenu from './FilterMenu'
import Pagination from './Pagination'
import GridView from './gridView/GridView'
import ListView from './listView/ListView'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App-Body-Main',
  components: {
    FilterMenu,
    Pagination,
    ListView,
    GridView
  },
  data() {
    return {
      videosCount: 1
    }
  },
  mounted() {
    this.fetchVideos()
  },
  computed: {
    ...mapGetters({
      videos: "getVideos",
      appearance: "getAppearance",
      pagination: "getPagination"
    }),
    paginationVideos() {
      const numVideos = this.pagination.find(el => el.isActive)
      if (numVideos.num <= 3) return this.videos.slice(6 * numVideos.num - 6, (6 * numVideos.num) * this.videosCount)
      return []
    }
  },
  methods: {
    ...mapActions(["fetchVideos"])
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin: 40px 0 29px;
  cursor: pointer;
}

.show-more-text {
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #000;
  margin-left: 9px;
}
</style>
