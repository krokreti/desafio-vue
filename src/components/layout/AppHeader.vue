!<template>
  <div>
    <nav class="navbar">
        TALK2MEE
        <!--i class='fas fa-comments'></i-->
    </nav>
  </div>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.navbar{
    background-color: #05141c;
    height: 3em;
    display: flex;
    justify-content: center;
    color: white;
    font-family: DeepShadow;
    cursor: pointer;
}


@font-face {
    font-family: DeepShadow;
    src: url("../../assets/Deep-Shadow.woff");
}
</style>