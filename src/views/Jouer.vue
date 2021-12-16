<template>
  <VariantMenu />
  <Play msg="GO" />
  <bottom copyright="© William-Arno CLEMENT" />
</template>

<script>
/**
 * Cette page permet de jouer à Christmas FORCE 2.
 * L'import webgl a été très fastidieux mais le tout fonctionne sans problème.
 */
import MainTop from '../components/MainTop.vue'
import VariantMenu from '../components/VariantMenu.vue'
import Bottom from '../components/Bottom.vue'
import Play from '../components/Play.vue'


export default {
  name: 'App',
  components: {
    MainTop,
    VariantMenu,
    Bottom,
    Play
  }
}
</script>