<template>
    <div class="w-50 " >
        <div class="w-100 mb-3" v-for="post in posts" :key="post.id">
            <PostagemVue :post="post"/>
        </div>
    </div>
</template>

<script>
import PostagemVue from './Postagem.vue';
export default {
    name: 'ListaPostagens',
    data() {
        return {
            posts: [],
            favorite: false,
            showTextArea: false,
            comments: [],

        }
    },
    methods: {
        async fetchPosts() {
            const req = await fetch("https://gorest.co.in/public/v2/posts");
            const data = await req.json();
            this.posts = data;
            
        },

    },
    created() {
        this.fetchPosts();
    },
    components: {
        PostagemVue,
    },
}
</script>

<style>






</style>