<template>
  <div class="header-head">
    <div class="burger-menu" @click="isOpenSidebar = !isOpenSidebar">
      <div class="burger"></div>
      <div class="burger"></div>
      <div class="burger"></div>
    </div>
    <img :src="require('@/assets/logo.svg')" alt="home" class="logo"/>
    <input class="input-base" type="text" placeholder="Шукайте будь-що..." v-model="inputData"/>
    <img :src="require('@/assets/magnifying-glass.svg')" alt="search" class="magnifying-glass"/>
    <img :src="require('@/assets/profile-icon.svg')" alt="profile" class="profile"/>
    <span class="e-mail">person@gmail.com</span>
    <img :src="require('@/assets/notification.svg')" alt="notification" class="notification"/>
    <transition name="slide">
    <div class="sidebar" v-if="isOpenSidebar">
      <span v-for="(section, key) in sections" :key="key" @click="isOpenSidebar = false">{{ section }}</span>
    </div>
    </transition>
    <div v-if="isOpenSidebar" class="outside" @click="isOpenSidebar = false"></div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
  data() {
    return {
      inputData: '',
      isOpenSidebar: false
    }
  },
  name: 'App-Header-HeaderHead',
  computed: {
    ...mapGetters({
      sections: "getSections"
    })
  },
  methods: {
    ...mapMutations(["setSearchVideo"])
  },
  watch: {
    inputData(data) {
      this.setSearchVideo(data)
    }
  }
}
</script>

<style scoped>
.header-head {
  display: flex;
  align-items: center;
  background: #232323;
}

.burger-menu {
  margin-left: 20px;
  cursor: pointer;
  z-index: 11;
}

.burger {
  width: 20px;
  height: 2px;
  background: #C4C4C4;
  border-radius: 2px;
  margin: 2.5px 0;
}

.logo {
  margin-left: 10.6%;
}

.input-base {
  height: 24px;
  width: 47.8%;
  border: none;
  border-radius: 5px;
  margin: 12px 1.7% 8px 2.2%;
  padding: 8px 10px 8px 15px;
}

.input-base:focus {
  outline: none;
}

.magnifying-glass {
  margin: 10px 11px 8px 17px;
}

::placeholder {
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  align-items: center;
  color: #656565;
  background-image: url('@/assets/search-icon.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 17px;
}

.profile {
  width: 16px;
  height: 16px;
  align-items: center;
  margin-right: 6px;
}

.e-mail {
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #FFF;
  margin-right: 18.5px;
}

.sidebar {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 45px;
  left: 0;
  height: 100%;
  width: 38%;
  background: #414141;
  color: #FFF;
  z-index: 11;
}
.slide-enter-active {
  animation: openSidebar .3s linear;
}
.slide-leave-active {
  animation: closeSidebar .3s linear;
}
.sidebar span {
  font-family: 'Roboto-Light', sans-serif;
  margin: 5px 0;
  padding: 5px 0;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: #FFF;
  cursor: pointer;
  text-align: center;
  width: 100%;
}

.sidebar span:hover {
  background: #ED3434;
}

.outside {
  position: absolute;
  width: 100%;
  height: 1800px;
  z-index: 10;
}

@keyframes openSidebar {
  0% {
    left: -38%;
  }
  100% {
    left: 0;
  }
}

@keyframes closeSidebar {
  0% {
    left: 0;
  }
  100% {
    left: -38%;
  }
}

@media (min-width: 1001px) {
  .sidebar {
    display: none;
  }
}

@media (min-width: 1000px) {
  .burger-menu {
    display: none;
  }
}

@media (max-width: 900px) {
  .notification, .e-mail {
    display: none;
  }
}

@media (max-width: 505px) {
  .input-base {
    display: none;
  }
}

@media (min-width: 505px) {
  .magnifying-glass {
    display: none;
  }

  .sidebar {
    top: 60px;
  }
}
</style>
