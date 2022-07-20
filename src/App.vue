<template>
  <div id="app">
    <AppHeaderVue/>
    <router-view/>
  </div>
</template>
<script>
import AppHeaderVue from './components/layout/AppHeader.vue'


export default {
  data() {
    return {
      
    }
  },
  components: {
    AppHeaderVue,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  background-color: #05141c;  
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

.box {
  background-color: #1b2730;
  
}
</style>
