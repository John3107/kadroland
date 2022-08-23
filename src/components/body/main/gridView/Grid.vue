<template>
  <div class="grid">
    <img :src="data.covers.main" alt="cover" class="poster"/>
    <div class="premier-date">
      <span class="date-text">{{ dateUK }}</span>
    </div>
    <div class="title">{{ stringBreaker }}</div>
    <Rating class="rate"/>
    <div class="watching">
      <Watching :isAccess="data.access"/>
      <img :src="require('@/assets/heart.svg')" alt="like"/>
    </div>
  </div>
</template>

<script>
import Rating from '../facades/Rating'
import Watching from '../facades/Watching'

export default {
  name: 'App-Body-Main-GridView-Grid',
  props: ['data'],
  components: {
    Rating,
    Watching
  },
  computed: {
    dateUK() {
      return new Date(this.data.date).toLocaleString('uk', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    stringBreaker() {
      return this.data.title.replace(/<br>/g, "\n")
    }
  }
}
</script>

<style scoped>
.grid {
  width: 221px;
  height: 388px;
  background: #FFF;
  border-radius: 5px 5px 0 0;
  position: relative;
  padding: 21px 15px 21px 19px;
  margin-bottom: 24px;
}

.poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 255px;
  height: 240px;
  border-radius: 5px 5px 0 0;
}

.premier-date {
  position: absolute;
  top: 228px;
  left: 18.4%;
  width: 134px;
  height: 18px;
  background: #FFF;
  border-radius: 5px;
  padding: 3px 0 3px 26px;
}

.date-text {
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #FF0000;
}

.title {
  font-family: 'Roboto-Light', sans-serif;
  white-space: pre-wrap;
  height: 53px;
  margin-top: 243px;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #000;
}

.rate {
  display: flex;
  justify-content: center;
  margin: 6px 0 13px;
}

.watching {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .grid {
    width: 74.5%;
  }

  .poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .premier-date {
    left: 28.4%;
  }
}

@media (max-width: 435px) {
  .premier-date {
    left: 18.4%;
  }
}
</style>