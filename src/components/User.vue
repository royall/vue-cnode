<template>

  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
      </div>
      <div class="panel-body">
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
  import api from '@/common/api';
  import TopicList from '@/components/TopicList';

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
    created() {
      let loginname=this.$route.params.loginname;
      api.getUser(loginname).then((res) => {
        console.log('res', res.data);
        this.user = res.data.data;
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
