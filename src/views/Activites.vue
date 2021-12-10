<template>
  <MainMenu msg="GO" />
  <MainTop msg="GO" />
  <PhotoFun />
  <Bottom copyright="© William-Arno CLEMENT" />
</template>

<script>
import MainTop from '../components/OtherTop.vue'
import MainMenu from '../components/MainMenu.vue'
import PhotoFun from '../components/PhotoFun.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'App',
  components: {
    MainTop,
    MainMenu,
    Bottom,
    PhotoFun
  }
}
</script>