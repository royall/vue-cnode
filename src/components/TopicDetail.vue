<template>
  <div class="container detail">
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
                </div>
                <div class="reply-content" v-html="checkContent(reply.content)"></div>
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
  import utils from '../common/utils';
  import constants from '../common/constants';

  export default {
    name: 'TopicDetail',
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
      fetch() {
        let id = this.$route.params.id;
        api.getTopic(id, this.token).then((res) => {
          console.log('res', res.data);
          this.topic = res.data.data;
        }).catch(error => {
          this.$toasted.error(error);
        });
      },
      checkContent(str) {
        return str.replace(/(\/user\/\S+">\S+<\/a>)/g, '#$1');
      },
      checkCollect() {
        this.topic.is_collect ? this.unCollect() : this.collect()
      },
      collect() {
        api.collect({
          accesstoken: this.token,
          topic_id: this.topic.id
        }).then(res => {
          console.log('collect', res);
          this.topic.is_collect = true;
          this.$toasted.success('收藏成功');
        });
      },
      unCollect() {
        api.unCollect({
          accesstoken: this.token,
          topic_id: this.topic.id
        }).then(res => {
          console.log('unCollect', res);
          this.topic.is_collect = false;
          this.$toasted.success('取消收藏成功');
        });
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
    padding-top:10px
  }
  .btn-collect{
    /*float:right*/
  }
  .content{
    margin-bottom:30px;
  }
</style>
