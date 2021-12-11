<template>
  <MainMenu msg="GO" />
  <MainTop msg="GO" />
  <Characters />
</template>

<script>
import MainTop from '../components/OtherTop.vue'
import MainMenu from '../components/MainMenu.vue'
import Bottom from '../components/Bottom.vue'
import Characters from '../components/Characters.vue'

export default {
  name: 'Personnages',
  components: {
    MainTop,
    MainMenu,
    Bottom,
    Characters
  }
}
</script>