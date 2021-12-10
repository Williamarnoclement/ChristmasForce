<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>


<script>
import Home from "./views/Home";
import Activites from "./views/Activites";

const routes = {
  "/": Home,
  "/activites": Activites
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
