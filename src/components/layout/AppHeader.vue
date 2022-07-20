!<template>
  <div>
    <nav class="navbar">
        
        <div class="navbar-logo">
            <!--i class='fas fa-comments'></i-->
            TALK2MEE
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
.navbar, .navbar-logo {
    display: flex;
}

.navbar{
    line-height: 3em;
    justify-content: center;
}

.navbar-logo {
    color: white;
    align-items: center;
    font-family: DeepShadow;
    cursor: pointer;
}

@font-face {
    font-family: DeepShadow;
    src: url("../../assets/Deep-Shadow.woff");
}
</style>