<template>
  <div class="d-block">
    <div
      class="
        voltar
        border border-1 border-light
        rounded-circle
        px-3
        py-2
        float-start
        ms-3
        position-absolute
      "
      @click="voltar()"
    >
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <div class="d-flex justify-content-center">
      <div class="lista box w-50">
        <div class="container box">
          <div class="row">
            <div class="lista-user box mr-2 col-2 text-center">
              <img
                src="../../assets/profile-picture-man.png"
                alt="profile-picture"
                style="width: 85%"
                v-if="user.gender == 'male'"
              />
              <img
                src="../../assets/profile-picture-woman.png"
                alt="profile-picture"
                style="width: 85%"
                v-else
              />
              {{ user.name }}
            </div>
            <div class="lista-conteudo box col-10">
              <span>
                <h4 class="box">{{ post.title }}</h4>
                {{ post.id }}
              </span>
              <span>
                {{ post.body }}
              </span>
            </div>
          </div>
          <div class="row mt-4">
            <div
              class="lista-actions d-flex box justify-content-center flex-wrap"
            >
              <button
                type="button"
                class="btn btn-primary mx-1"
                @click="favoritar"
              >
                <i
                  class="fa-solid fa-heart box"
                  style="color: red; background: #28353e"
                  v-if="favorite"
                ></i>
                <i
                  class="fa-regular fa-heart box"
                  style="background: #28353e"
                  v-else
                ></i>
                Curtir
              </button>
              <button
                type="button"
                class="btn btn-primary mx-1"
                @click="showTextArea = !showTextArea"
              >
                Comentar
              </button>
            </div>
          </div>
          <div class="row mt-4 box" v-if="showTextArea">
            <textarea
              v-model="novoComentario"
              placeholder="Digite seu comentário aqui..."
              class="form-control w-75"
              id="comentario"
              rows="3"
            ></textarea>
            <button
              type="button"
              rows="3"
              class="btn btn-primary"
              @click="validarComentario()"
            >
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="lista box mt-2 text-center">
        {{
          comments.length == 0
            ? "Esta postagem ainda não possui comentários."
            : "Comentários:"
        }}
      </div>
    </div>

    <div
      class="d-flex justify-content-center mt-2"
      v-for="comment in comments"
      :key="comment.id"
    >
      <Comentario :comment="comment" />
    </div>
  </div>
</template>

<script>
import Comentario from "./Comentario.vue";
import { mapActions } from "vuex";
import router from "@/router";

export default {
  name: "PostDetalhado",
  data() {
    return {
      id: null,
      post: null,
      id_user: null,
      user: null,
      comments: [],
      showTextArea: false,
      novoComentario: null,
      favorite: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.fetchPostById();
    this.addLoggedUser(JSON.parse(localStorage.getItem("user")));
  },
  async mounted() {},
  components: {
    Comentario,
  },
  methods: {
    ...mapActions(["addLoggedUser"]),
    async fetchPostById() {
      const req = await fetch(
        "https://gorest.co.in/public/v2/posts/" + this.id,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer " +
              "791a4bdc85e9e4db3defbdd204c01ee1fbd39c5faf755fda9a3979649e5a6881",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await req.json();
      this.post = data;
      this.id_user = this.post.user_id;
      this.fetchPostUser();
    },
    async fetchPostUser() {
      const req = await fetch(
        `https://gorest.co.in/public/v2/users/${this.id_user}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer " +
              "791a4bdc85e9e4db3defbdd204c01ee1fbd39c5faf755fda9a3979649e5a6881",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await req.json();

      this.user = data;
      this.fetchComments();
    },
    async fetchComments() {
      const req = await fetch(
        `https://gorest.co.in/public/v2/posts/${this.id}/comments`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer " +
              "791a4bdc85e9e4db3defbdd204c01ee1fbd39c5faf755fda9a3979649e5a6881",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await req.json();
      this.comments = data;
    },
    async publicarComentario() {
      const data = {
        post_id: this.id,
        name: this.$store.state.user.name,
        email: this.$store.state.user.email,
        body: this.novoComentario,
      };
      const dataJson = JSON.stringify(data);
      const req = await fetch(
        `https://gorest.co.in/public/v2/posts/${this.id}/comments`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer " +
              "791a4bdc85e9e4db3defbdd204c01ee1fbd39c5faf755fda9a3979649e5a6881",
            "Content-Type": "application/json",
          },
          body: dataJson,
        }
      );
      const res = await req.json();
      this.fetchComments();
      this.novoComentario = null;
      this.showTextArea = !this.showTextArea;
    },
    validarComentario() {
      if (this.novoComentario == null || this.novoComentario == "") {
        alert("Digite um comentário a ser publicado!");
      } else {
        this.publicarComentario();
      }
    },
    favoritar() {
      this.favorite = !this.favorite;
    },
    voltar() {
      router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
</style>