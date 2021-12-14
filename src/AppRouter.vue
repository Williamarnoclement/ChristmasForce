<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>


<script>
import Home from "./views/Home";
import Activites from "./views/Activites";
import Personnages from "./views/Personnages";
import Jouer from "./views/Jouer";

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
