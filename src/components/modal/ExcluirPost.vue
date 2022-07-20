<template>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" @click="showModal=true" data-bs-target="#exampleModal">
  Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" v-if="showModal==true" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Excluir Postagem</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Tem certeza que quer excluir a publicação?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Excluir</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'ExcluirPost',
    data() {
        return {
            showModal: false,
        }
    },
}
</script>

<style>

</style>