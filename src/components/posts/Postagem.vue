<template>
  <div class="lista box w-100">
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
          </span>
          <span>
            {{ post.body }}
          </span>
        </div>
      </div>
      <div class="row mt-4">
        <div class="lista-actions d-flex box justify-content-center flex-wrap">
          <button type="button" class="btn btn-primary mx-1" @click="favoritar">
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
            @click="verPostDetalhado(post.id)"
          >
            Ver Publicação
          </button>
        </div>
      </div>
      <div class="row mt-4 box" v-if="showTextArea">
        <textarea
          placeholder="Digite seu comentário aqui..."
          class="form-control w-75"
          id="comentario"
          rows="3"
        ></textarea>
        <button type="button" rows="3" class="btn btn-primary">Publicar</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { getUserById } from "@/api";
export default {
  name: "Postagem",
  props: {
    post: null,
  },
  data() {
    return {
      favorite: false,
      commentsCount: null,
      user: null,
    };
  },
  async mounted() {
    this.fetchPostUser();
  },
  methods: {
    favoritar() {
      this.favorite = !this.favorite;
    },
    fetchPostUser() {
      getUserById(this.post.user_id).then((response) => {
        this.user = response;
      });
    },
    verPostDetalhado(id) {
      router.push({ name: "post-detalhado", params: { id: `${id}` } });
    },
  },
};
</script>

<style>
.lista {
  width: 50%;
  height: fit-content;
  color: white;
  border-radius: 20px;
  padding: 1em;
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