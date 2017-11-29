<template>
  <div class="container detail">
    <div class="panel panel-default">
      <div class="panel-body">
        <h3 class="title">{{topic.title}}</h3>
        <div class="meta">
          发布于 {{createTime}} | 作者 <router-link :to="{name:'User',params:{loginname:topic.author.loginname}}">{{topic.author.loginname}}</router-link>  |  {{topic.visit_count}}次浏览  | 分类 <router-link :to="{name:'Topics',query:{tab:topic.tab}}">{{tabDesc}}</router-link>
        </div>
        <article v-html="topic.content"></article>
        <div class="panel panel-default">
          <div class="panel-heading">{{topic.replies.length}} 回复</div>
          <div class="panel-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="reply in topic.replies">
                <div>
                  <router-link :to="{name:'User',params:{loginname:reply.author.loginname}}"><img class="avatar" :src="reply.author.avatar_url"/></router-link>
                  <router-link :to="{name:'User',params:{loginname:reply.author.loginname}}"><strong>{{reply.author.loginname}}</strong></router-link>
                  {{formatDate(reply.create_at)}}
                </div>
                <div class="reply-content" v-html="checkContent(reply.content)"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../common/api';
  import utils from '../common/utils';

  export default {
    name: 'TopicDetail',
    data() {
      return {
        topic: {
          author: {},
          replies:[]
        }
      }
    },
    created() {
      let id = this.$route.params.id;
      api.getTopic(id).then((res) => {
        console.log('res', res.data);
        this.topic = res.data.data;
      }).catch(res => {
        console.log('error', res)
      });
    },
    methods: {
      formatDate(str) {
        return utils.formatDate(str)
      },
      checkContent(str){
        return str.replace(/(\/user\/\S+">\S+<\/a>)/g,'#$1');
      }
    },
    computed: {
      tabDesc() {
        let map = {
          ask: '问答',
          good: '精华',
          job: '招聘',
          share: '分享',
          dev: '客户端测试',
        };
        return map[this.topic.tab]
      },
      createTime() {
        return utils.formatDate(this.topic.create_at);
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
    padding-bottom:10px
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
</style>
