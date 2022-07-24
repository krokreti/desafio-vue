<template>
  <div class="lista box w-50">
    <div class="container box">
      <div class="row">
        <div class="lista-user box mr-2 col-2 text-center">
          <img
            src="../../assets/profile-picture-man.png"
            alt="profile-picture"
            style="height: 50%"
            class="img-fluid"
          />

          {{ comment.name }}
        </div>
        <div
          class="lista-conteudo box col-10 comentario d-flex align-items-start"
        >
          {{ comment.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comentario",
  props: {
    comment: null,
    gender: null,
  },
};
</script>

<style scoped>
.lista {
  height: fit-content;
}

.comentario {
  font-size: 0.9em;
}
</style>