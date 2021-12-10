<template>
  <div>
    <app-router></app-router>
  </div>
</template>

<script>
import AppRouter from "./AppRouter";

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