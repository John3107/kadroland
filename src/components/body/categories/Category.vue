<template>
  <div class="category">
    <div class="category-container" :style="{borderRadius: data.context[0] && '4px 4px 0 0'}">
      <div class="main-part">
        <img :src="require(data.isVideo ? '@/assets/is-video.svg' : '@/assets/isnt-video.svg')" alt="video icon"/>
        <span class="title">{{ data.title }}</span>
      </div>
      <img v-if="data.isRedirect"
           :src="require(data.context[0]
    ? '@/assets/arrow-down.svg'
    : '@/assets/arrow-right.svg')"
           alt="context icon"/>
    </div>
    <div v-if="data.context[0]" class="context">
      <div v-for="(section, key) in data.context" :key="key" class="section">{{ section }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App-Body-Categories-Category',
  props: ['data']
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
}

.section:first-of-type {
  color: #ED3434;
}
</style>