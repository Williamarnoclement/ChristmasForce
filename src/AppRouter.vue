<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>


<script>
/**
 * AppRouter est le système de route que j'ai choisi d'utiliser,
 * il est moins performant que le package native vue-route, 
 * mais il est plus simple d'approche pour moi et la solution fonctionne.
 */
import Home from "./views/Home";
import Activites from "./views/Activites";
import Personnages from "./views/Personnages";
import Jouer from "./views/Jouer";

//On met en place les routes vers les différentes vues
const routes = {
  "/": Home,
  "/activites": Activites,
  "/personnages": Personnages,
  "/jouer": Jouer
};

export default {
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  },
  render(createElement) {
    return createElement(this.routedComponent);
  }
};
</script>
