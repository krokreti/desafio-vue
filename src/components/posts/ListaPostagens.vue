<template>
  <div class="w-50">
    <div class="w-100 mb-3" v-for="post in posts" :key="post.id">
      <Postagem :post="post" />
    </div>
  </div>
</template>

<script>
import { getPosts } from "@/Api";
import Postagem from "./Postagem.vue";
export default {
  name: "ListaPostagens",
  data() {
    return {
      posts: [],
      favorite: false,
      showTextArea: false,
      comments: [],
    };
  },
  methods: {
    getPosts() {
      getPosts().then((response) => {
        this.posts = response;
      });
    },
  },
  created() {
    this.getPosts();
  },
  components: {
    Postagem,
  },
};
</script>

<style>
</style>