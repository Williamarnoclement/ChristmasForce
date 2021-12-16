<template>
  <MainMenu msg="GO" />
  <MainTop msg="GO" />
  <MainSectionOne msg="GO" />
  <MainSectionTwo msg="GO" />
  <MainMore msg="GO" />
  
  <bottom copyright="© William-Arno CLEMENT" />
</template>

<script>
/**
 * Cette vue permet l'affichage de la page d'accueil.
 * On y a placé un call-to-action par section afin de présenter chacun des produits( les deux jeux ainsi que l'application Photomaton)
 * L'idée est de faire en sorte que les différentes vues soient recyclables en faisant des vues pour chacune des parties de la page.
 * On se rapproche ainsi d'un simili-MVC
 */
import MainTop from '../components/MainTop.vue'
import MainMenu from '../components/MainMenu.vue'
import Bottom from '../components/Bottom.vue'
import MainSectionOne from '../components/MainSectionOne.vue'
import MainSectionTwo from '../components/MainSectionTwo.vue'
import MainMore from '../components/MainMore.vue'
import CharacterOne from '../components/CharacterOne.vue'


export default {
  name: 'App',
  components: {
    MainTop,
    MainMenu,
    Bottom,
    MainSectionOne,
    MainSectionTwo,
    MainMore,
    CharacterOne
  }
}
</script>