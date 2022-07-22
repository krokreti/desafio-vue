!<template>
  <div class="perfil">
    <div class="perfil-box box">
        <div class="perfil-box-image box">
        <img src="../../assets/profile-picture.png" alt="profile-picture" style="width:40%; height:25%">
        </div>
        <h5>{{ user.name }}</h5>
        <h6>
            <p class="text-muted box">@{{ profileName }}</p>
        </h6>
        <h6>{{user.status}}</h6>
        <div class="perfil-seguidores">
            <div class="perfil-seguidores-following box">
                6,490
                Following
            </div>
            <div class="perfil-seguidores-followers box">
                4,227
                Followers
            </div>
        </div>
        <div class="perfil-visualizar mt-3 box" >
            <router-link class="box " :to="{ name: 'profile', params: { id: `${user.id}` }}">Meu Perfil</router-link>
        </div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AppPerfil',
    data() {
        return {
            user: null,
            profileName: null,
        }
    },
    methods: {
        ...mapActions(['addLoggedUser',]),

        async getLoggedUser() {
            const req = await fetch("https://gorest.co.in/public/v2/users");
            const data = await req.json();
            this.user = data[0];
            const vector = this.user.email.split("@")
            this.profileName = vector[0]
            this.addLoggedUser(this.user)
        }
    },
    created() {
        this.getLoggedUser()
    },
}
</script>

<style>
h5, h6, p, span {
    background:none;
    filter:none;
    box-shadow:none;
    border-radius:0px;
    border:none;
}

img {
    border-radius: 20px;
}

.perfil {
 width: 25%;
 height: 25em;
 margin: 0 1.5em 1.5em 1.5em;
 color: white;
 
}

.perfil-box {
    padding: 1em;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.perfil-box-image, h5, h6, 
.perfil-seguidores, .perfil-seguidores-following, .perfil-seguidores-followers,
.perfil-visualizar {
    display: flex;
    justify-content: center;
}

.perfil-seguidores {
    border: 1px solid #64707c;
}


.perfil-seguidores-following, .perfil-seguidores-followers {
    width: 50%;
    text-align: center;
    color: white;
    padding: 5% 27.2%;
}

.perfil-visualizar, .perfil-visualizar a {
    text-decoration: none;
    line-height: 4.8em;
    color: #5193bc;
    font-weight: 700;
    cursor: pointer;
    border-radius: 20px;
    transition: .5s;
    
}

.perfil-visualizar a {
    width: 100%;
    text-align: center;
}

.perfil-visualizar a:hover {
    background: #324858;
    color: #6bc3f9;
}

.text-muted {
    text-transform: lowercase;
    
}


</style>