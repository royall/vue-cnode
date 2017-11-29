<template>

  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <ul class="nav nav-pills">
          <router-link role="presentation" tag="li" :to="{name:'Topics'}" exact-active-class="active"><a>全部</a></router-link>
          <router-link  role="presentation" tag="li" :to="{name:'Topics',query:{tab:'good'}}" exact-active-class="active"><a>精华</a></router-link>
          <router-link  role="presentation" tag="li" :to="{name:'Topics',query:{tab:'share'}}" exact-active-class="active"><a>分享</a></router-link>
          <router-link  role="presentation" tag="li" :to="{name:'Topics',query:{tab:'ask'}}" exact-active-class="active"><a>问答</a></router-link>
          <router-link  role="presentation" tag="li" :to="{name:'Topics',query:{tab:'job'}}" exact-active-class="active"><a>招聘</a></router-link>
          <router-link  role="presentation" tag="li" :to="{name:'Topics',query:{tab:'dev'}}" exact-active-class="active"><a>客户端测试</a></router-link>
        </ul>
      </div>
      <div class="panel-body">
        <TopicList :topics="topics"></TopicList>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '@/common/api';
  import TopicList from '@/components/TopicList';

  export default {
    name: 'Index',
    components:{
      TopicList
    },
    data() {
      return {
        topics: []
      }
    },
    created() {

      let tab=this.$route.query.tab;
      let opts={
        tab:tab||''
      };
      api.getTopics(opts).then((res) => {
        console.log('res', res.data);
        this.topics = res.data.data;
      });
    }
  }
</script>

<style>
  .avatar{
    width:30px;
    height:30px
  }
</style>
