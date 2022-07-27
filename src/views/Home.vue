<template>
  <div class="home d-flex">
    <AppPerfil />
    <ListaPostagens />
  </div>
</template>

<script lang="ts">
import AppPerfil from "../components/layout/AppPerfil.vue";
import ListaPostagens from "../components/posts/ListaPostagens.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    AppPerfil,
    ListaPostagens,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped>
</style>
