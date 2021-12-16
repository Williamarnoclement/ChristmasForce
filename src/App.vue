<template>
  <div>
    <app-router></app-router>
  </div>
</template>

<script>
/**
 * App.vue est le fichier principale
 */
//importe le système de routage 
import AppRouter from "./AppRouter";

//met en place le routage
export default {
  components: {
    AppRouter
  },
  methods: {
    goTo(route) {
      window.location = route;
    }
  }
};
</script>