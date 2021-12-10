<template>
  <MainMenu msg="GO" />
  <MainTop msg="GO" />
  <MainSectionOne msg="GO" />
  <MainSectionTwo msg="GO" />
  <MainMore msg="GO" />
  
  <bottom copyright="© William-Arno CLEMENT" />
</template>

<script>
import MainTop from './components/MainTop.vue'
import MainMenu from './components/MainMenu.vue'
import Bottom from './components/Bottom.vue'
import MainSectionOne from './components/MainSectionOne.vue'
import MainSectionTwo from './components/MainSectionTwo.vue'
import MainMore from './components/MainMore.vue'


export default {
  name: 'App',
  components: {
    MainTop,
    MainMenu,
    Bottom,
    MainSectionOne,
    MainSectionTwo,
    MainMore
  }
}
</script>
