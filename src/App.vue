<template>
  <div id="app">
    <AppHeaderVue />
    <router-view />
  </div>
</template>
<script>
import AppHeaderVue from "./components/layout/AppHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeaderVue,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  background-color: #05141c;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
}

.box {
  background-color: #1b2730;
}

h5,
h6,
p,
span {
  background: none;
  filter: none;
  box-shadow: none;
  border-radius: 0px;
  border: none;
}

.btn-primary {
  width: 25%;
  white-space: normal;
  --bs-btn-bg: #28353e;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: #5193bc;
  --bs-btn-hover-bg: (#28353e, 10%);
  --bs-btn-hover-border-color: #28353e;
  --bs-btn-focus-shadow-rgb: #28353e;
  --bs-btn-active-border-color: #28353e;
}
</style>
