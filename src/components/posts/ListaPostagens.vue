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
                <button type="button" class="btn btn-primary mx-1" @click="showTextArea=!showTextArea">
                    Comentar
                </button>
                <button type="button" class="btn btn-primary mx-1" @click="confirmarExclusao(posts.id)">
                    Excluir
                </button>
            </div>
        </div>
        <div class="row mt-4 box" v-if="showTextArea">
            <textarea placeholder="Digite seu comentário aqui..." class="form-control w-75" id="comentario" rows="3"></textarea>
            <button type="button" rows="3" class="btn btn-primary">Publicar</button>
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
            showTextArea: false,

        }
    },
    methods: {
        async fetchPosts() {
            const req = await fetch("https://gorest.co.in/public/v2/posts");
            const data = await req.json();
            this.posts = data[0];
        },
        async deletePost(id) {
            try {
                const req = await fetch("https://gorest.co.in/public/v2/posts/"+ id, {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + '791a4bdc85e9e4db3defbdd204c01ee1fbd39c5faf755fda9a3979649e5a6881',
                    'Content-Type': 'application/json'
                }
                });
                console.log(req.status)
                } catch(e) {
                    return e;
            }
            this.fetchPosts();
        },

        favoritar() {
            this.favorite = !this.favorite;
        },
        confirmarExclusao(id) {
            let r=confirm("Tem certeza que deseja excluir esta publicação? " + id);
            if(r==true) {
                this.deletePost(id)
            } else {

            }
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

#comentario {
    border: 1px solid white;
    color: white;
    background-color: #324858;
}

.form-control::placeholder { 
            color: white;
            opacity: 1; 
}

textarea {
    resize: none;
}

</style>