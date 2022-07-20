<template>
  <div class="lista box">
    <div class="container box">
        <div class="row">
        <div class="lista-user box mr-2 col-2 ">
            <img src="../../assets/profile-picture.png" alt="profile-picture" style="width:85%; ">
        </div>
        <div class="lista-conteudo box col-10">
        <span>
            <h4 class="box">{{ posts.title }}</h4>
        </span>
        <span>
            {{ posts.body }}
        </span>
        </div>
        </div>
        <div class="row mx-4" >
            <router-link class="box d-flex justify-content-end " :to="{ name: 'post-detalhado', params: { id: `${posts.id}` }}"> Ver mais...</router-link>
        </div>
        <div class="row mt-4">
            <div class="lista-actions d-flex box ">
                <button type="button" class="btn btn-primary mx-1 " @click="favoritar">
                    <i class="fa-solid fa-heart box" style="color: red; background: #28353e;" v-if="favorite"></i>
                    <i class="fa-regular fa-heart" style="background: #28353e;" v-else></i>
                    Curtir
                </button>
                <button type="button" class="btn btn-primary mx-1">
                    Comentar
                </button>
                <button type="button" class="btn btn-primary mx-1">
                    Excluir
                </button>

            </div>
        </div>
  </div>
  </div>
</template>

<script>

export default {
    name: 'ListaPostagens',
    data() {
        return {
            posts: [],
            favorite: false,
        }
    },
    methods: {
        async fetchPosts() {
            const req = await fetch("https://gorest.co.in/public/v2/posts");
            const data = await req.json();
            this.posts = data[0];
        },
        favoritar() {
            this.favorite = !this.favorite
        },
    },
    created() {
        this.fetchPosts();
    },
    components: {

    },
}
</script>

<style>
.lista {
    width: 50%;
    height: fit-content;
    color: white;
    border-radius: 20px;
    padding: 1em;
}

.lista-actions {
    justify-content: center;
    flex-wrap: wrap;
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