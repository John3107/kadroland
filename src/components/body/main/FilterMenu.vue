<template>
  <div class="filter-menu">
    <div class="filter-action-list">
      <div class="head" @click="onActionListHandler">
        <span class="title">{{ listTitle }}</span>
        <ArrowDown :fillColor="'#C4C4C4'"/>
      </div>
      <div class="body" v-if="actionList">
        <div class="list" v-for="(item, key) in listData" :key="key" @click="selectParam(item)">
          <img :src="require('@/assets/success.svg')" alt="success" v-if="item.isActive"/>
          <span :style="{marginLeft: !item.isActive && '17px'}">{{ item.title }}</span>
        </div>
      </div>
    </div>
    <FilterGrid :fillColor="appearance === 'grid' ? '#ED3434' : '#C4C4C4'"
                class="filter-grid" @click.native="toGridHandler"/>
    <FilterList :fillColor="appearance === 'list' ? '#ED3434' : '#C4C4C4'"
                class="filter-list" @click.native="toListHandler"/>
    <div v-if="actionList" class="outside" @click="onBlurHandler"></div>
  </div>
</template>

<script>
import FilterGrid from "@/icons/FilterGrid";
import FilterList from "@/icons/FilterList";
import {mapGetters, mapMutations} from "vuex"
import ArrowDown from "@/icons/ArrowDown"

export default {
  name: 'App-Body-Main-FilterMenu',
  data() {
    return {
      listData: [
        {title: 'Спочатку нові', isActive: true},
        {title: 'Популярні', isActive: false},
        {title: 'За рейтингом', isActive: false},
      ],
      listTitle: 'Спочатку нові',
      actionList: false
    }
  },
  components: {
    FilterGrid,
    FilterList,
    ArrowDown
  },
  computed: {
    ...mapGetters({
      appearance: "getAppearance"
    })
  },
  methods: {
    ...mapMutations(['setChangeAppearance', 'setFilteredVideos']),
    toGridHandler() {
      this.setChangeAppearance('grid')
    },
    toListHandler() {
      this.setChangeAppearance('list')
    },
    onActionListHandler() {
      this.listTitle = 'Сортувати'
      this.actionList = !this.actionList
    },
    selectParam(param) {
      this.listData = this.listData.map(el => el.title === param.title
          ? ({...el, isActive: true})
          : ({...el, isActive: false}))
      this.listTitle = param.title
      this.setFilteredVideos(param.title)
      this.actionList = !this.actionList
    },
    onBlurHandler() {
      const selectedFilter = this.listData.find(el => el.isActive)
      this.listTitle = selectedFilter.title
      this.actionList = !this.actionList
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
  position: relative;
}

.filter-action-list {
  position: absolute;
  top: 0;
  right: 53px;
  width: 108px;
  border: 0.5px solid #262D4A;
  border-radius: 5px;
  background: #FFF;
  z-index: 100;
  padding: 0 10px 2px 10px;
}

.head {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
}

.title {
  font-family: 'Roboto-Light', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
  color: #656565;
  white-space: nowrap;
  text-align: center;
  margin-right: 6%;
}

.body {
  font-family: 'Roboto-Light', sans-serif;
  background: #FFF;
}

.list {
  display: flex;
  align-items: center;
  padding: 4px 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #232323;
  cursor: pointer;
}

.list img {
  width: 10px;
  height: 8px;
  margin-right: 6px;
}

.list span {
  cursor: pointer;
}

.filter-grid {
  margin: 0 9px;
  cursor: pointer;
  white-space: nowrap;
}

.filter-list {
  margin-top: 1.5px;
  cursor: pointer;
}

.outside {
  position: absolute;
  width: 1800px;
  height: 1800px;
  z-index: 10;
}
</style>
