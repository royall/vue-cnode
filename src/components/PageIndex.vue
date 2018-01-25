<template>
  <div class="container">
    <v-title>{{title}}</v-title>
    <div class="panel panel-default">
      <div class="panel-heading">
        <tab-nav/>
      </div>
      <div class="panel-body">
        <topic-list :topics="topics"/>
        <pager :page="page" :tab="tab" name="Topics"/>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../common/api';
  import TopicList from '../components/TopicList';
  import Pager from './BasePager';
  import TabNav from "./TabNav";
  import VTitle from "./VTitle";
  import constants from "../common/constants";

  export default {
    name: 'page-index',
    components: {
      VTitle,
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
    computed: {
      title() {
        let first = this.tab === 'all' ? '' : constants.tabMap[this.tab],
          last = 'vue-CNode';
        return first ? first + '板块 - ' + last : last
      },
    },
    mounted() {
      this.fetch();
    },
    methods: {
      async fetch() {
        let $route = this.$route,
          query = $route.query,
          tab = $route.params.tab || 'all',
          page = Number(query.page) || 1,
          opts = {
            tab: tab,
            page: page
          };
        this.tab = tab;
        this.page = page;
        try{
          const res=await api.getTopics(opts);
          this.topics = res.data.data;
        }catch (e){
          this.$toasted.error(e);
        }
      }
    },
    watch: {
      $route: 'fetch'
    }
  }
</script>

<style scoped>

  .list-group{
    min-height:850px
  }

</style>
