<template>
  <div>
    <v-title>@{{user.loginname}}的个人主页</v-title>
    <div class="panel panel-default">
      <div class="panel-heading">用户信息</div>
      <div class="panel-body">
        <img :src="user.avatar_url" class="header-img"/>
        <div class="user-info-right">
          <strong>{{user.loginname}}</strong>
          <br> github:<a class="dark" :href="githubUrl" target="_blank">@{{user.githubUsername}}</a><br> {{user.score}}积分<br>
          <router-link :to="{name:'Collections'}">收藏的主题
            <span v-if="collectTopics.length">({{collectTopics.length}})</span></router-link>
          <br> 注册时间：{{user.create_at|toLocale}}
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">最近创建的话题</div>
      <div class="panel-body">
        <topic-list v-if="user.recent_topics.length" :topics="user.recent_topics"/>
        <span v-else>暂无最近创建的话题</span>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">最近参与的话题</div>
      <div class="panel-body">
        <topic-list v-if="user.recent_replies.length" :topics="user.recent_replies"/>
        <span v-else>暂无最近参与的话题</span>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../common/api';
  import TopicList from '../components/TopicList';
  import VTitle from "./VTitle";

  export default {
    name: 'user-index',
    components: {
      VTitle,
      TopicList
    },
    data() {
      return {
        user: {
          loginname: '-',
          recent_topics: [],
          recent_replies: [],
          create_at: '',
          githubUsername: ''
        },
        collectTopics: []
      }
    },
    computed: {
      githubUrl() {
        return 'https://github.com/' + this.user.githubUsername;
      }
    },
    mounted() {
      this.fetch();
    },
    methods: {
      async fetch() {
        let loginname = this.$route.params.loginname, res, collectRes;
        try {
          res = await api.getUser(loginname);
          this.user = res.data.data;
        } catch (e) {
          this.$toasted.error(e);
        }

        try {
          collectRes = await api.getCollect(loginname);
          this.collectTopics = collectRes.data.data;
        } catch (e) {
          this.$toasted.error(e);
        }
      }
    },
    watch: {
      $route: 'fetch'
    }
  }
</script>

<style>
  .header-img{
    float:left;
    width:120px;
    height:120px
  }
  .user-info-right{
    margin-left:140px;
  }
</style>
