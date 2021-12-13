<template>
  <MainMenu msg="GO" />
  <MainTop />
  <CharacterOne />
</template>

<script>
import MainTop from '../components/OtherTop.vue'
import MainMenu from '../components/MainMenu.vue'
import Bottom from '../components/Bottom.vue'
import CharacterOne from '../components/CharacterOne.vue'

export default {
  name: 'Personnages',
  components: {
    MainTop,
    MainMenu,
    Bottom,
    CharacterOne
  }
}
</script>