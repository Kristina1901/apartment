<template>
 <form @submit.prevent>
        <h4>Создание поста</h4>
        <input type="text" placeholder="Название" v-model='post.title'/>
        <input type="text" placeholder="Описание" v-model='post.body'/>
        <button class="btn" @click="createPost">Создать</button>
      </form>
   </template>
  <style scoped>
  * {
    padding: 0;
    margin: 0;
   box-sizing: border-box;
  }
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
  }
  input {
    width: 100%;
    border: 1px solif teal;
    padding: 10px 15px;
    margin-top: 15px;
  }
  .app {
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
  }
  </style>
  <script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        },
      }
    },
    methods:{
    createPost() {
        this.post.id= Date.now(),
        this.$emit('create', this.post)
        this.post = {
         title: '',
         body: ''
        }
            
    }
  } 
  }
  </script>