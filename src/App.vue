<template>
  <div id="app">
    <AppHeaderVue/>
    <AppPerfilVue/>
    <router-view/>
  </div>
</template>
<script>
import AppHeaderVue from './components/layout/AppHeader.vue'
import AppPerfilVue from './components/layout/AppPerfil.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    AppHeaderVue,
    AppPerfilVue,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: #05141c;
  box-sizing: border-box;
}

.box {
  background: #1b2730;
}
</style>
