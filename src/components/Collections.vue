<template>

  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        {{loginname}} 的收藏 ({{topics.length}})
      </div>
      <div class="panel-body">
        <TopicList v-if="topics.length" :topics="topics"></TopicList>
        <span v-else>暂无收藏的主题</span>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '../common/api';
  import TopicList from '../components/TopicList';

  export default {
    name: 'Collections',
    components: {
      TopicList,
    },
    data() {
      let $route = this.$route,
        loginname=$route.params.loginname;
      return {
        topics: [],
        loginname:loginname
      }
    },
    mounted() {
      api.getCollect(this.loginname).then((res) => {
        this.topics = res.data.data;
      }).catch((error)=>{
        this.$toasted.error(error);
      });
    }
  }
</script>
<style scoped>

</style>
