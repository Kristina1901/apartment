<template>
  <div class="app">
    <PostForm @create="onCreatePost"/>
   <PostList :posts="posts" @remove="removePost"/>
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
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue'
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: "JavaScript", body: "Описание поста"},
        {id: 2, title: "JavaScript2", body: "Описание поста2"},
        {id: 3, title: "JavaScript2", body: "Описание поста2"},
      ],
    }
  },
  methods: {
    onCreatePost(post) {
    this.posts.push(post); 
    console.log(post) 
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id!==post.id)
    }
  }
}
</script>