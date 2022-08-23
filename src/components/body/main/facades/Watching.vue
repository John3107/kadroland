<template>
      <div class="to-see-box">
        <div class="to-see-text" v-if="isAccess">дивитися</div>
        <div class="to-see-text" v-else>придбати</div>
        <div class="to-see-icon">
          <img :src="require('@/assets/arrow-right-white.svg')" alt="arrow right"/>
        </div>
      </div>
</template>

<script>
export default {
  name: 'App-Body-Main-Facades-Watching',
  props: ['isAccess']
}
</script>

<style scoped>
.to-see-box {
  display: flex;
  position: relative;
  width: 178px;
  height: 32px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  cursor: pointer;
}

.to-see-text {
  display: inherit;
  align-items: center;
  margin-left: 35px;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-transform: uppercase;
  color: #232323;
  text-align: center;
}

.to-see-icon {
  position: absolute;
  align-items: center;
  justify-content: center;
  display: inherit;
  top: -1px;
  right: -1px;
  width: 34px;
  height: 34px;
  background: #ED3434;
  border-radius: 5px;
}
</style>