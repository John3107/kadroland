<template>
  <div class="header">
    <Main/>
    <Navigation/>
  </div>
</template>

<script>
import Main from './main/Main'
import Navigation from './navigation/Navigation'

export default {
  name: 'App-Header',
  components: {
    Main,
    Navigation
  }
}
</script>

<style scoped></style>
