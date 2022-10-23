<template>
    <div>
      <h3>Список пользователей</h3>
      <PostItem v-for="post in posts"
       :post="post" v-bind:key="post.id"/>
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
  </style>
 <script>
import PostItem from './PostItem.vue';
 export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    } 
 }
</script>