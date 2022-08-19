<template>
  <div class="pagination">
    <div class="arrow-section"><img :src="require('@/assets/arrow-left.svg')" alt="arrow-left"/></div>
    <div class="pagination-body"
         :style="{color: item.isActive && '#ED3434',
         background: typeof item.num === 'string' && '#FFF'}"
         v-for="item in pagination"
         :key="item.num">{{ item.num }}
    </div>
    <div class="arrow-section"><img :src="require('@/assets/arrow-right.svg')" alt="arrow-right"/></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App-Body-Main-Pagination',
  components: {},
  computed: {
    ...mapGetters({
      pagination: "getPagination"
    })
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.arrow-section {
  width: 17px;
  height: 18px;
  background: #F8F8F8;
  border-radius: 0 5px 5px 0;
  border: 1px solid #C4C4C4;
  padding: 7px 8px;
  cursor: pointer;
}

.arrow-section:first-child {
  border-radius: 5px 0 0 5px;
  background: #FFF;
}

.pagination-body {
  width: 17px;
  height: 18px;
  background: #F8F8F8;
  border: 1px solid #C4C4C4;
  padding: 7px 8px;
  text-align: center;
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #000;
  cursor: pointer;
}
</style>
