<template>
  <div class="app">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Body from './components/body/Body'

export default {
  name: 'App',
  components: {
    Header,
    Body
  }
}
</script>

<style scoped>
.app {
  font-family: 'Roboto', sans-serif;
}
</style>
