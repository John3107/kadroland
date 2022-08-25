<template>
  <div class="category">
    <div class="category-container" :style="{borderRadius: data.context[0] && '4px 4px 0 0'}">
      <div class="main-part">
        <img :src="require(data.isVideo ? '@/assets/is-video.svg' : '@/assets/isnt-video.svg')" alt="video icon"/>
        <span class="title">{{ data.title }}</span>
      </div>
      <div v-if="data.isRedirect">
        <ArrowDown v-if="data.context[0]"/>
        <img v-else :src="require('@/assets/arrow-right.svg')" alt="context icon"/>
      </div>
    </div>
    <div v-if="data.context[0]" class="context">
      <div v-for="(section, key) in data.context" :key="key"
           class="section"
           @click="changeTheme(section)"
           :style="{color: section.isActive ? '#ED3434' : '#232323'}">
        {{ section.title + ` (${section.data.length})` }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import ArrowDown from "@/icons/ArrowDown"

export default {
  name: 'App-Body-Categories-Category',
  props: ['data'],
  components: {
    ArrowDown
  },
  methods: {
    ...mapMutations(['setSelectedTheme', 'setSelectedCategory']),
    changeTheme(section) {
      this.setSelectedTheme(section.data)
      const categoriesUpdated = this.data.context.map(el => el.theme === section.theme
          ? ({...el, isActive: true})
          : ({...el, isActive: false}))
      this.setSelectedCategory(categoriesUpdated)
    }
  }
}
</script>

<style scoped>
.category {
  margin-bottom: 16px;
}

.category-container {
  display: flex;
  align-items: center;
  width: 206px;
  justify-content: space-between;
  padding: 8px 8px 8px 16px;
  background: #E5E5E5;
  border-radius: 4px;
}

.main-part {
  display: inherit;
  align-items: inherit;
}

.title {
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  text-transform: uppercase;
  color: #232323;
  margin-left: 8px;
}

.context {
  border: 1px solid #E5E5E5;
  border-radius: 0 0 4px 4px;
  padding: 12px;
}

.section {
  font-family: 'Roboto-Light', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #232323;
  margin: 4px;
  cursor: pointer;
}

.section {
  color: #ED3434;
}
</style>