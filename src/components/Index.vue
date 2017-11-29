<template>

  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <ul class="nav nav-pills">
          <router-link role="presentation" tag="li" :to="{name:'Topics'}" exact-active-class="active"><a>全部</a>
          </router-link>
          <router-link role="presentation" tag="li" :to="{name:'Topics',query:{tab:'good'}}" exact-active-class="active">
            <a>精华</a></router-link>
          <router-link role="presentation" tag="li" :to="{name:'Topics',query:{tab:'share'}}" exact-active-class="active">
            <a>分享</a></router-link>
          <router-link role="presentation" tag="li" :to="{name:'Topics',query:{tab:'ask'}}" exact-active-class="active">
            <a>问答</a></router-link>
          <router-link role="presentation" tag="li" :to="{name:'Topics',query:{tab:'job'}}" exact-active-class="active">
            <a>招聘</a></router-link>
          <router-link role="presentation" tag="li" :to="{name:'Topics',query:{tab:'dev'}}" exact-active-class="active">
            <a>客户端测试</a></router-link>
        </ul>
      </div>
      <div class="panel-body">
        <TopicList :topics="topics"></TopicList>
        <Pager :page="page" :tab="tab" path="/topics"></Pager>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '@/common/api';
  import TopicList from '@/components/TopicList';
  import Pager from '@/components/Pager';

  export default {
    name: 'Index',
    components: {
      TopicList,
      Pager
    },
    data() {
      let query = this.$route.query,
        tab = query.tab || 'all',
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
        console.log('res', res.data);
        this.topics = res.data.data;
      });
    }
  }
</script>

<style></style>
