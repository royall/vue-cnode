<template>

  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">用户信息</div>
      <div class="panel-body">
        <img :src="user.avatar_url" class="header-img"/>
        <div class="user-info-right">
          <strong>{{user.loginname}}</strong> <br>
          github:<a class="dark" :href="githubUrl" target="_blank">@{{user.githubUsername}}</a><br>
          {{user.score}}积分<br>
          注册时间：{{formatDate(user.create_at)}}
        </div>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">最近创建的话题</div>
      <div class="panel-body">
        <TopicList :topics="user.recent_topics"></TopicList>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">最近参与的话题</div>
      <div class="panel-body">
        <TopicList :topics="user.recent_replies"></TopicList>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '../common/api';
  import utils from '../common/utils';
  import TopicList from '../components/TopicList';

  export default {
    name: 'User',
    components:{
      TopicList
    },
    data() {
      return {
        user:{}
      }
    },
    computed:{
      githubUrl(){
        return 'https://github.com/'+this.user.githubUsername;
      }
    },
    created() {
      let loginname=this.$route.params.loginname;
      api.getUser(loginname).then((res) => {
        console.log('res', res.data);
        this.user = res.data.data;
      });
    },
    methods: {
      formatDate(str) {
        return utils.formatDate(str)
      }
    },
  }
</script>

<style>
  .header-img{ float:left; width:120px; height:120px}
  .user-info-right{
    margin-left:140px;
  }
</style>
