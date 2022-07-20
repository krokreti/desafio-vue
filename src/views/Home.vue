<template>
  <div class="home d-flex">
    <AppPerfilVue/>
    <ListaPostagensVue/>
  </div>
</template>

<script lang="ts">
import AppPerfilVue from '@/components/layout/AppPerfil.vue';
import ListaPostagensVue from '@/components/posts/ListaPostagens.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    AppPerfilVue,
    ListaPostagensVue,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped>
</style>
