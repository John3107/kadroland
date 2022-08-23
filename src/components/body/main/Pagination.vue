<template>
  <div class="pagination">
    <div class="arrow-section" @click="changePageArrow('back')">
      <img :src="require('@/assets/arrow-left.svg')" alt="arrow-left"/>
    </div>
    <div class="pagination-body" @click="changePageNum(item.num)"
         :style="{color: item.isActive ? '#ED3434' : '#000',
         background: typeof item.num === 'string' && '#FFF'}"
         v-for="item in pagination"
         :key="item.num">{{ item.num }}
    </div>
    <div class="arrow-section" @click="changePageArrow('next')">
      <img :src="require('@/assets/arrow-right.svg')" alt="arrow-right"/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'App-Body-Main-Pagination',
  computed: {
    ...mapGetters({
      pagination: "getPagination"
    })
  },
  methods: {
    ...mapMutations(['setPagination']),
    changePageNum(numPage) {
      const falseElements = this.pagination.map(el => ({...el, isActive: false}))
      const willChange = falseElements.map(el => el.num === numPage ? ({...el, isActive: !el.isActive}) : el)
      this.setPagination(willChange)
    },
    changePageArrow(model) {
      const numVideos = this.pagination.find(el => el.isActive)
      const falseElements = this.pagination.map(el => ({...el, isActive: false}))
      let willChange
      if (model === 'back') {
        if (numVideos.num > 1 && numVideos.num < 10) {
          falseElements[numVideos.num - 2].isActive = true
          willChange = falseElements.map(el => el)
        }
      } else {
        if (numVideos.num < 3) {
          falseElements[numVideos.num].isActive = true
          willChange = falseElements.map(el => el)
        }
      }
      willChange && this.setPagination(willChange)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.arrow-section {
  width: 17px;
  height: 18px;
  background: #F8F8F8;
  border-radius: 0 5px 5px 0;
  border: 1px solid #C4C4C4;
  padding: 7px 8px;
  cursor: pointer;
}

.arrow-section:first-child {
  border-radius: 5px 0 0 5px;
  background: #FFF;
}

.pagination-body {
  width: 17px;
  height: 18px;
  background: #F8F8F8;
  border: 1px solid #C4C4C4;
  padding: 7px 8px;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #000;
  cursor: pointer;
}
</style>
