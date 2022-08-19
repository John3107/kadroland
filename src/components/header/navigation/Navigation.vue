<template>
  <div class="navigation">
    <div class="sections" v-for="(section, key) in sections" :key="key">{{ section }}</div>
    <button>передлатити</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App-Header-Navigation',
  computed: {
    ...mapGetters({
      sections: "getSections"
    })
  }
}
</script>

<style scoped>
.navigation {
  display: flex;
  background: #414141;
  padding: 0 10.4%;
  align-items: center;
}

.sections {
  padding: 18px 12px;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: #FFF;
}

:first-child {
  padding-left: 0;
}

.sections:last-of-type {
  background: #ED3434;
}

.navigation button {
  border: none;
  text-transform: uppercase;
  height: 40px;
  width: 338px;
  margin-left: 12%;
  background: #ED3434;
  border-radius: 5px;
  color: #FFF;
  padding: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}
</style>
