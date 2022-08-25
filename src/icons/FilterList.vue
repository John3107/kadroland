<template>
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.1875H19V4.75H0V1.1875Z" :fill="fillColor"/>
    <path d="M0 7.125H19V10.6875H0V7.125Z" :fill="fillColor"/>
    <path d="M0 13.0625H19V16.625H0V13.0625Z" :fill="fillColor"/>
  </svg>
</template>

<script>
export default {
  name: 'FilterList-Icon',
  props: ['fillColor']
}
</script>
