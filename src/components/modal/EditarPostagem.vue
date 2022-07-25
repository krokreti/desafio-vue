<template>
  <div class="box box-dialog">
    <button
      type="button"
      class="btn btn-primary w-100 m-0"
      data-bs-toggle="modal"
      :data-bs-target="'#exampleModal' + publicacao.id"
      @click="atualizarDados"
    >
      Editar
    </button>

    <div
      class="modal fade"
      :id="'exampleModal' + publicacao.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog box">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Editar Publicação
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row mt-1 box">
              <div class="mb-3 box w-100">
                <label for="tituloPublicacaoEdit1" class="form-label box"
                  >Título:
                </label>
                <input
                  type="text"
                  v-model="titulo"
                  class="form-control box"
                  id="tituloPublicacaoEdit"
                  placeholder="Digite o título da publicação."
                />
              </div>
            </div>
            <div class="row box">
              <div class="mb-3 box">
                <label for="conteudoPublicacaoEdit1" class="form-label box"
                  >Conteúdo:</label
                >
                <textarea
                  v-model="conteudo"
                  class="form-control box"
                  id="conteudoPublicacaoEdit"
                  rows="3"
                  placeholder="Digite o conteúdo da publicação."
                ></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              @click="validateChanges()"
            >
              Salvar
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updatePost } from "@/api";

export default {
  name: "EditarPostagem",
  props: {
    publicacao: null,
  },
  data() {
    return {
      titulo: null,
      conteudo: null,
    };
  },
  created() {
    this.titulo = this.publicacao.title;
    this.conteudo = this.publicacao.body;
  },
  methods: {
    atualizarDados() {
      this.titulo = this.publicacao.title;
      this.conteudo = this.publicacao.body;
    },
    validateChanges() {
      if (this.titulo == null || this.conteudo == null) {
        alert("Os campos devem estar preenchidos!");
      } else {
        this.updateChanges();
      }
    },
    async updateChanges() {
      const data = {
        title: this.titulo,
        body: this.conteudo,
      };
      updatePost(this.publicacao.id, data).then((response) => {
        this.$emit("atualizar-publicacoes");
        document.getElementById("close").click();
      });
    },
  },
};
</script>

<style scoped>
.box-dialog {
  width: 28%;
}

.fade {
  background: rgba(0, 0, 0, 0.5);
}

.modal-header,
.box,
.modal-body {
  background-color: #1b2730;
}

.modal-dialog {
  height: fit-content;
  opacity: 1 !important;
  background: #05141c !important;

  --bs-modal-bg: #324858;
  --bs-modal-border-color: #5193bc;
  --bs-modal-color: white;
  --bs-modal-header-border-color: transparent;
  --bs-modal-footer-border-color: white;
  --bs-modal-footer-bg: #1b2730;
}
</style>