<template>
  <div class="container detail">
    <v-title>{{topic.title}}</v-title>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3 class="title">{{topic.title}}</h3>
        <div class="meta">
          发布于 {{topic.create_at|toLocale}} | 作者
          <router-link :to="{name:'UserIndex',params:{loginname:topic.author.loginname}}">{{topic.author.loginname}}</router-link>
          | {{topic.visit_count}}次浏览 | 分类
          <router-link :to="{name:'Topics',params:{tab:topic.tab},query:{page:1}}">{{tabDesc}}</router-link>
          <input v-if="topic.author_id && token" class="btn-collect btn btn-info pull-right" type="button" :value="isCollect" @click="checkCollect"/>
        </div>
        <article class="content" v-html="topic.content"></article>
        <div class="panel panel-default">
          <div class="panel-heading">{{topic.replies.length}} 回复</div>
          <div class="panel-body">
            <ul v-if="topic.replies.length" class="list-group">
              <li class="list-group-item" v-for="reply in topic.replies">
                <div>
                  <router-link :to="{name:'UserIndex',params:{loginname:reply.author.loginname}}">
                    <img class="avatar" :src="reply.author.avatar_url"/></router-link>
                  <router-link :to="{name:'UserIndex',params:{loginname:reply.author.loginname}}">
                    <strong>{{reply.author.loginname}}</strong></router-link>
                  {{reply.create_at|toLocale }}
                  <span v-if="reply.author.loginname===topic.author.loginname" class="label label-success">作者</span>
                </div>
                <div class="reply-content" v-html="checkContent(reply.content)"></div>
                <div @click="agree(reply.id)" class="agree" :class="{'agree-none':!reply.ups.length}">
                  <span class="glyphicon glyphicon-thumbs-up"> </span>{{reply.ups.length?reply.ups.length:''}}
                </div>
              </li>
            </ul>
            <span v-else>暂无回复</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../common/api';
  import constants from '../common/constants';
  import VTitle from "./VTitle";
  import {mutations} from '../common/constants'

  export default {
    components: {VTitle},
    name: 'topic-detail',
    data() {
      return {
        topic: {
          author: {},
          replies: []
        }
      }
    },
    mounted() {
      this.fetch();
    },
    computed: {
      token() {
        return this.$store.state.accessToken
      },
      tabDesc() {
        return constants.tabMap[this.topic.tab]
      },
      isCollect() {
        return this.topic.is_collect ? '取消收藏' : '收藏'
      }
    },
    methods: {
      async fetch() {
        let id = this.$route.params.id,
          res;
        try {
          res = await api.getTopic(id, this.token);
          console.log('res', res.data);
          this.topic = res.data.data;
        } catch (e) {
          this.$toasted.error(e);
        }
      },
      checkContent(str) {
        return str.replace(/(\/user\/\S+">\S+<\/a>)/g, '#$1');
      },
      checkCollect() {
        this.topic.is_collect ? this.unCollect() : this.collect()
      },
      async collect() {
        let res;
        try {
          res = await api.collect({
            accesstoken: this.token,
            topic_id: this.topic.id
          });
          console.log('collect', res);
          this.topic.is_collect = true;
          this.$toasted.success('收藏成功');
        } catch (e) {
          this.$toasted.error(e);
        }
      },
      async unCollect() {
        let res;
        try {
          res = await api.unCollect({
            accesstoken: this.token,
            topic_id: this.topic.id
          });
          console.log('unCollect', res);
          this.topic.is_collect = false;
          this.$toasted.success('取消收藏成功')
        } catch (e) {
          this.$toasted.error(e);
        }
      },
      async agree(id) {
        if (!this.$store.state.isLogin) {
          this.$toasted.show('请先登录，登录后即可点赞');
          return setTimeout(() => {
            this.$store.commit(mutations.SHOWLOGINDIALOG);
          }, 3000);
        }
        let res;
        try {
          res = await api.upReply(id, this.token);
          console.log('upReply', res);
          let action = res.data.action;
          this.topic.replies.forEach(value => {
            if (value.id === id) {
              action === 'up' ? value.ups.push(true) : value.ups.shift()
            }
          });
        } catch (e) {
          this.$toasted.error(e);
        }
      },
    },
    watch: {
      token() {
        this.fetch();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .detail{
  }
  .detail img{
    max-width:100%
  }
  .meta{
    border-bottom:1px solid #ccc;
    margin-bottom:20px;
    padding-bottom:10px;
    overflow:hidden;
  }
  .title{
    margin-bottom:20px;
    width:75%
  }
  .avatar{
    width:30px;
    height:30px
  }
  .reply-content{
    margin-left:35px;
    padding-top:10px;
    padding-right:50px;
  }
  .content{
    margin-bottom:30px;
  }
  .agree{
    position:absolute;
    right:20px;
    top:50%;
    font-size:12px;
    line-height:14px;
    cursor:pointer
  }
  .agree-none{
    display:none
  }
  .list-group-item:hover .agree-none{
    display:block
  }
</style>
