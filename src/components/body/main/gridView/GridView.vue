<template>
  <div class="grid-view">
    <Grid v-for="video in data" :data="video" :key="video.id"/>
  </div>
</template>

<script>
import Grid from './Grid'

export default {
  name: 'App-Body-Main-GridView',
  props: ['data'],
  components: {
    Grid
  }
}
</script>

<style scoped>
.grid-view {
  display: grid;
  grid-template-columns: repeat(3, 255px);
  grid-column-gap: 2.6rem;
}

@media (max-width: 1275px) {
  .grid-view {
    grid-column-gap: 1rem;
  }
}

@media (max-width: 1235px) {
  .grid-view {
    grid-template-columns: repeat(2, 255px);
    grid-column-gap: 12rem;
  }
}

@media (max-width: 1130px) {
  .grid-view {
    grid-column-gap: 3rem;
  }
}

@media (max-width: 960px) {
  .grid-view {
    grid-column-gap: 1rem;
  }
}

@media (max-width: 920px) {
  .grid-view {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
