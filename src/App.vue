<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input type="text" placeholder="Название" @input="title = $event.target.value" v-bind:value="title"/>
      <input type="text" placeholder="Описание" @input="body = $event.target.value" v-bind:value="body"/>
      <button class="btn" @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="post in posts" v-bind:key="post.id"> 
      <div>
        <strong>Название:</strong>
        {{post.title}}
     </div>
     <div>
        <strong>Описание:</strong>
        {{post.body}}
     </div>
     </div>
     </div>
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
      posts: [
        {id: 1, title: "JavaScript", body: "Описание поста"},
        {id: 2, title: "JavaScript2", body: "Описание поста2"},
        {id: 2, title: "JavaScript2", body: "Описание поста2"},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
     createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
    this.posts.push(newPost)
    this.title = ''
    this.body = ''
    }
  }
}
</script>