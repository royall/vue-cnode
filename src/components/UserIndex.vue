<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">用户信息</div>
      <div class="panel-body">
        <img :src="user.avatar_url" class="header-img"/>
        <div class="user-info-right">
          <strong>{{user.loginname}}</strong> <br>
          github:<a class="dark" :href="githubUrl" target="_blank">@{{user.githubUsername}}</a><br>
          {{user.score}}积分<br>
          <router-link :to="{name:'Collections'}">收藏的主题 <span v-if="collectTopics.length">({{collectTopics.length}})</span> </router-link><br>
          注册时间：{{formatDate(user.create_at)}}
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">最近创建的话题</div>
      <div class="panel-body">
        <TopicList  v-if="user.recent_topics.length" :topics="user.recent_topics"></TopicList>
        <span v-else>暂无最近创建的话题</span>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">最近参与的话题</div>
      <div class="panel-body">
        <TopicList v-if="user.recent_replies.length" :topics="user.recent_replies"></TopicList>
        <span v-else>暂无最近参与的话题</span>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../common/api';
  import utils from '../common/utils';
  import TopicList from '../components/TopicList';

  export default {
    name: 'UserIndex',
    components:{
      TopicList
    },
    data() {
      return {
        user:{
          recent_topics:[],
          recent_replies:[],
          create_at:''
        },
        collectTopics:[]
      }
    },
    computed:{
      githubUrl(){
        return 'https://github.com/'+this.user.githubUsername;
      }
    },
    mounted() {
      this.fetch();
    },
    methods: {
      fetch(){
        let loginname=this.$route.params.loginname;
        api.getUser(loginname).then((res) => {
          this.user = res.data.data;
        });

        api.getCollect(loginname).then((res) => {
          this.collectTopics = res.data.data;
        }).catch((error)=>{
          this.$toasted.error(error);
        });
      },
      formatDate(str) {
        return utils.formatDate(str)
      }
    },
    watch: {
      $route: 'fetch'
    }
  }
</script>

<style>
  .header-img{ float:left; width:120px; height:120px}
  .user-info-right{
    margin-left:140px;
  }
</style>
