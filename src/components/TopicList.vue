<template>
    <ul class="list-group">
      <li class="list-group-item" v-for="topic in topics" :data-id="topic.id">
        <span v-if="topic.visit_count" class="badge">{{ topic.reply_count }}/{{topic.visit_count}}</span>
        <router-link :to="{name:'UserIndex',params:{loginname:topic.author.loginname}}"><img :src="topic.author.avatar_url" class="avatar"/></router-link>
        <router-link :to="{name:'TopicDetail',params:{id:topic.id}}">{{ topic.title }}</router-link>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'TopicList',
    props:{
      topics:Array
    }
  }
</script>

<style>
  .avatar{
    width:30px;
    height:30px
  }
</style>
