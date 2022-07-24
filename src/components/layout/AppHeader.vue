!<template>
  <div>
    <nav class="navbar d-flex justify-content-center" role="button">
        
        <div class="navbar-logo d-flex align-items-center text-white fw-bold" >
            <router-link class="navbar-logo text-decoration-none " :to="{ name: 'home'}"> TALK2MEE</router-link>
        </div> 

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
    line-height: 3em;
}

.navbar-logo {
    color: white;
    font-family: DeepShadow;

}

@font-face {
    font-family: DeepShadow;
    src: url("../../assets/Deep-Shadow.woff");
}
</style>