<template>

  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <tab-nav></tab-nav>
      </div>
      <div class="panel-body">
        <TopicList :topics="topics"></TopicList>
        <Pager :page="page" :tab="tab" name="Topics"></Pager>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '../common/api';
  import TopicList from '../components/TopicList';
  import Pager from '../components/Pager';
  import TabNav from "./TabNav";

  export default {
    name: 'Index',
    components: {
      TabNav,
      TopicList,
      Pager
    },
    data() {
      let $route = this.$route,
        query = $route.query,
        tab = $route.params.tab || 'all',
        page = Number(query.page) || 1;
      return {
        topics: [],
        page: page,
        tab: tab
      }
    },
    created() {
      let opts = {
        tab: this.tab,
        page: this.page
      };
      api.getTopics(opts).then((res) => {
        this.topics = res.data.data;
      }).catch((error)=>{
        this.$toasted.clear();
        this.$toasted.error(error);
      });
    }
  }
</script>

<style scoped>

  .list-group{ min-height: 850px}

</style>
