<template>
    <div class="rating">
      <span class="rating-num">5.0</span>
      <img :src="require('@/assets/stars.svg')" alt="stars"/>
      <span class="rating-voices">(231)</span>
    </div>
</template>

<script>

export default {
  name: 'App-Body-Main-Facades-Rating',
}
</script>

<style scoped>
.rating{
  display: flex;
  align-items: center;
}

.rating-num{
  font-weight: 300;
  font-size: 26px;
  line-height: 150%;
  color: #FF0000;
  margin-right: 6px;
}

.rating-voices{
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: #262D4A;
  margin-left: 4px;
}
</style>