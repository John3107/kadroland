<template>
  <div class="list-view">
    <List v-for="video in data" :data="video" :key="video.id"/>
  </div>
</template>

<script>
import List from './List'

export default {
  name: 'App-Body-Main-ListView',
  props: ['data'],
  components: {
    List
  }
}
</script>

<style scoped>

</style>
