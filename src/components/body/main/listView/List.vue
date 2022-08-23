<template>
  <div class="list">
    <img :src="data.covers.main" alt="cover" class="poster"/>
    <div class="premier-date">
      <span class="date-text">{{ dateUK }}</span>
      <div class="title">{{ stringBreaker }}</div>
      <Rating class="rate"/>
      <Watching class="watching-less-size" :isAccess="data.access"/>
    </div>
    <img :src="require('@/assets/heart.svg')" alt="like" class="like"/>
    <Watching class="watching" :isAccess="data.access"/>
  </div>
</template>

<script>
import Rating from '../facades/Rating'
import Watching from '../facades/Watching'

export default {
  name: 'App-Body-Main-ListView-List',
  props: ['data'],
  components: {
    Rating,
    Watching
  },
  computed: {
    dateUK() {
      console.log(this.data.access)
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
.list {
  height: 129px;
  background: #FFF;
  border-radius: 5px;
  position: relative;
  padding: 16px 0;
  margin-bottom: 24px;
}

.poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 173px;
  height: 161px;
  border-radius: 5px 0 0 5px;
}

.premier-date {
  margin-left: 209px;
}

.date-text {
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #FF0000;
}

.title {
  white-space: pre-wrap;
  width: 58.9%;
  margin-top: 8px;
  height: 53px;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #000;
}

.rate {
  margin-top: 11px;
}

.watching {
  position: absolute;
  top: 56px;
  right: 16px;
}

.like {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 16px;
  right: 16px;
}

@media (max-width: 1185px) {
  .list {
    padding: 24px 20px;
    height: 172px;
  }

  .poster {
    height: 100%;
  }

  .title {
    font-family: 'Roboto-Light', sans-serif;
    width: 100%;
    text-align: center;
    margin-top: 12px;
    height: 38px;
  }

  .premier-date {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rate {
    margin: 16px 0 15px;
  }

  .watching {
    display: none;
  }

  .like {
    top: 21px;
    right: 15px;
  }
}

@media (min-width: 1185px) {
  .watching-less-size {
    display: none;
  }
}

@media (max-width: 1050px) {
  .poster {
    display: none;
  }

  .premier-date {
    margin-left: 0;
  }
}

</style>