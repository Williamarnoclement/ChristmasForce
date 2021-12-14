<template>
  <MainMenu msg="GO" />
  <Play msg="GO" />
  <bottom copyright="© William-Arno CLEMENT" />
</template>

<script>
import MainTop from '../components/MainTop.vue'
import MainMenu from '../components/MainMenu.vue'
import Bottom from '../components/Bottom.vue'
import Play from '../components/Play.vue'


export default {
  name: 'App',
  components: {
    MainTop,
    MainMenu,
    Bottom,
    Play
  }
}
</script>