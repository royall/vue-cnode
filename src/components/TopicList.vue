<template>
    <transition-group name="list" tag="ul" class="list-group">
      <li class="list-group-item list-item" v-for="topic in topics" :data-id="topic.id" :key="topic.id">
        <router-link :to="{name:'UserIndex',params:{loginname:topic.author.loginname}}"><img :src="topic.author.avatar_url" class="avatar"/></router-link>
        <span class="label" :class="getClassName(topic)">{{getTabDesc(topic)}}</span>
        <router-link :to="{name:'TopicDetail',params:{id:topic.id}}">{{ topic.title }}</router-link>
        <span v-if="topic.visit_count" class="badge"><span title="回复数">{{ topic.reply_count }}</span>/<span title="点击数">{{topic.visit_count}}</span></span>
      </li>
   </transition-group>

</template>

<script>
  import constants from '../common/constants'

  export default {
    name: 'topic-list',
    props:{
      topics:Array
    },
    methods:{
      getTabDesc(topic){
        return topic.top?"置顶":(topic.good?'精华':constants.tabMap[topic.tab])
      },
      getClassName(topic){
        return  (topic.top || topic.good) ?'label-success':'label-default'
      }
    }
  }
</script>

<style>
  .avatar{
    width:30px;
    height:30px
  }
  .list-item {
    transition: all 1s;
    margin-right: 10px;
  }
  .list-enter, .list-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-leave-active {
    position: absolute;
  }
</style>
