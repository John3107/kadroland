<template>
  <div class="header">
    <HeaderHead/>
    <Navigation/>
  </div>
</template>

<script>
import HeaderHead from './HeaderHead'
import Navigation from './Navigation'

export default {
  name: 'App-Header',
  components: {
    HeaderHead,
    Navigation
  }
}
</script>

<style scoped></style>
