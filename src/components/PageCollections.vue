<template>
  <div class="container">
    <v-title>@{{loginname}} 的收藏</v-title>
    <div class="panel panel-default">
      <div class="panel-heading">
        {{loginname}} 的收藏 ({{topics.length}})
      </div>
      <div class="panel-body">
        <topic-list v-if="topics.length" :topics="topics"/>
        <span v-else>暂无收藏的主题</span>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../common/api';
  import TopicList from '../components/TopicList';
  import VTitle from "./VTitle";

  export default {
    name: 'page-collections',
    components: {
      VTitle,
      TopicList,
    },
    data() {
      let $route = this.$route,
        loginname = $route.params.loginname;
      return {
        topics: [],
        loginname: loginname
      }
    },
    async mounted() {
      let res;
      try {
        res = await api.getCollect(this.loginname);
        this.topics = res.data.data;
      } catch (e) {
        this.$toasted.error(e);
      }

    }
  }
</script>
<style scoped>

</style>
