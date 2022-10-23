<template>
    <div class="post">
    <div>
    <strong>Название:</strong>
    {{post.title}}
     <div>
          <strong>Описание:</strong>
          {{post.body}}
       </div>
    </div>
       <div class="post__btns"></div>
       <button class="btn" @click="$emit('remove', post)">Удалить</button>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    props: {
        post: {
            type: Object,
            required: true
        }
    } 
 }
</script>