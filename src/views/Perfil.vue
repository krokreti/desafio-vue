<template>
  <div class="perfil w-100 d-block">
    <div
      class="
        voltar
        border border-1 border-light
        rounded-circle
        px-3
        py-2
        float-start
        position-absolute
        ms-3
      "
      @click="voltar()"
    >
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <div class="perfil-container d-flex justify-content-center">
      <div class="perfil-box box w-50 p-3">
        <div
          class="perfil-box-image box d-flex justify-content-center"
          v-if="user"
        >
          <img
            src="../assets/profile-picture-man.png"
            alt="profile-picture"
            style="width: 40%; height: 25%"
            class="img-fluid"
            v-if="user.gender == 'male'"
          />
          <img
            src="../assets/profile-picture-woman.png"
            alt="profile-picture"
            style="width: 40%; height: 25%"
            class="img-fluid"
            v-else
          />
        </div>
        <h4 class="box mt-2 text-center">{{ user.name }}</h4>
        <div class="container box">
          <div class="row">
            <div class="col box text-end">Email:</div>
            <div class="col box">{{ user.email }}</div>
          </div>
          <div class="row">
            <div class="col box text-end">Gênero:</div>
            <div class="col box">
              {{ user.gender == "male" ? "Masculino" : "Feminino" }}
            </div>
          </div>
          <div class="row justify-content-center box mt-3">
            <button
              type="button"
              class="btn btn-primary mx-1"
              @click="showNewPost = !showNewPost"
            >
              Criar Publicação
            </button>
          </div>
          <div
            class="container row box d-flex justify-content-center"
            v-if="showNewPost"
          >
            <div class="row mt-1 box">
              <div class="mb-3 box w-100">
                <label for="tituloPublicacao1" class="form-label box"
                  >Título:</label
                >
                <input
                  type="text"
                  v-model="titulo"
                  class="form-control box"
                  id="tituloPublicacao"
                  placeholder="Digite o título da publicação."
                />
              </div>
            </div>
            <div class="row box">
              <div class="mb-3 box">
                <label for="conteudoPublicacao1" class="form-label box"
                  >Conteúdo:</label
                >
                <textarea
                  v-model="conteudo"
                  class="form-control box"
                  id="conteudoPublicacao"
                  rows="3"
                  placeholder="Digite o conteúdo da publicação."
                ></textarea>
              </div>
            </div>
            <div class="row box justify-content-center">
              <button
                type="button"
                class="btn btn-primary mx-1"
                @click="validate()"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div
        class="perfil-box box w-50 mt-2 text-center p-3"
        v-if="posts.length != 0"
      >
        Minhas Publicações:
      </div>
      <div class="perfil-box box w-50 mt-2 text-center p-3" v-else>
        Você ainda não possui publicações!
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="publicacoes d-block w-50 flex-wrap">
        <div
          class="perfil-box box w-100 mt-2 p-3"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="row box">
            <h5 class="text-center">{{ post.title }}</h5>
          </div>
          <div class="row box p-3">
            {{ post.body }}
          </div>
          <div class="box row justify-content-center">
            <EditarPostagem
              :publicacao="post"
              @atualizar-publicacoes="getUserPosts()"
            />

            <button
              type="button"
              class="btn btn-primary mx-1"
              @click="confirmDelete(post.id)"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import EditarPostagem from "@/components/modal/EditarPostagem.vue";
import { getUserById, getUserPosts, deletePost, createPost } from "@/api";

export default {
  name: "Perfil",
  data() {
    return {
      id: null,
      user: [],
      posts: [],
      showNewPost: false,
      titulo: null,
      conteudo: null,
      editMode: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getUserById();
  },
  mounted() {
    this.getUserPosts();
  },
  components: {
    EditarPostagem,
  },

  methods: {
    voltar() {
      router.push({ name: "home" });
    },
    getUserById() {
      getUserById(this.id).then((response) => {
        this.user = response;
      });
    },
    getUserPosts() {
      getUserPosts(this.id).then((response) => {
        this.posts = response;
      });
    },
    confirmDelete(id) {
      let r = confirm("Tem certeza que deseja excluir esta publicação? " + id);
      if (r == true) {
        this.deletePost(id);
      }
    },
    deletePost(id) {
      deletePost(id).then((response) => {
        console.log(response.status);
        this.getUserPosts();
      });
    },
    validate() {
      if (this.conteudo == null || this.titulo == null) {
        alert("vazio");
      } else {
        this.save();
      }
    },
    save() {
      const data = {
        user_id: this.id,
        title: this.titulo,
        body: this.conteudo,
      };
      createPost(this.id, data).then((response) => {
        console.log("criou postagem: " + response);
        const res = response;
        console.log("🚀 ~ file: Perfil.vue ~ line 154 ~ createPost ~ res", res);
      });
      this.getUserPosts();
      this.titulo = null;
      this.conteudo = null;
    },
  },
};
</script>

<style>
#titulo-container,
#conteudo-container {
  width: 100%;
}

#tituloPublicacao,
#tituloPublicacaoEdit,
#conteudoPublicacaoEdit,
#conteudoPublicacao {
  border: 1px solid white;
  color: white;
  background-color: #324858;
}

.perfil-container {
  height: fit-content;
}

.perfil-box {
  height: fit-content;
}

.voltar {
  color: white;
  transition: 0.5s;
}

.voltar:hover {
  cursor: pointer;
  color: #5193bc;
  border: 1px solid #5193bc !important;
}
</style>