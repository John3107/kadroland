<template>
  <div class="main">
    <img :src="require('@/assets/logo.svg')" alt="home" class="logo"/>
    <input class="input-base" placeholder="Шукайте будь-що..."/>
    <img :src="require('@/assets/profile-icon.svg')" alt="profile" class="profile"/>
    <span class="e-mail">person@gmail.com</span>
    <img :src="require('@/assets/notification.svg')" alt="notification" class="notification"/>
  </div>
</template>

<script>

export default {
  name: 'App-Header-Main'
}
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  background: #232323;
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
.profile{
  width: 16px;
  height: 16px;
  align-items: center;
  margin-right: 6px;
}

.e-mail{
  font-weight: 300;
  font-size: 12px;
  line-height: 150%;
  color: #FFF;
  margin-right: 18.5px;
}
</style>
