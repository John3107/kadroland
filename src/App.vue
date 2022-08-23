<template>
  <div class="app">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from './components/header/Main'
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
.app{
  font-family: 'Roboto-Regular', sans-serif;
}
@font-face {
  font-family: "Roboto-Regular";
  src: local("Roboto-Regular"),
  url(../src/fonts/Roboto-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto-Light";
  src: local("Roboto-Light"),
  url(../src/fonts/Roboto-Light.ttf) format("truetype");
}
</style>
