<template>
  <MainMenu msg="GO" />
  <MainTop msg="GO" />
  <PhotoFun />
  <Bottom copyright="© William-Arno CLEMENT" />
</template>

<script>
/**
 * Cette vue permet l'affichage de l'expérience Photomaton.
 * On se contente d'y afficher le menu principale et le header, ainsi que le footer et le component PhotoFun
 */
import MainTop from '../components/OtherTop.vue'
import MainMenu from '../components/MainMenu.vue'
import PhotoFun from '../components/PhotoFun.vue'
import Bottom from '../components/Bottom.vue'

export default {
  name: 'Activites',
  components: {
    MainTop,
    MainMenu,
    Bottom,
    PhotoFun
  }
}
</script>