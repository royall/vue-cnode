<template>
  <ul class="nav nav-pills">
    <router-link role="presentation" tag="li" :to="{name:'Topics',params:{tab:'all'},query:{page:1}}" active-class="active"><a>全部</a>
    </router-link>
    <router-link role="presentation" tag="li" :to="{name:'Topics',params:{tab:'good'},query:{page:1}}" active-class="active">
      <a>精华</a></router-link>
    <router-link role="presentation" tag="li" :to="{name:'Topics',params:{tab:'share'},query:{page:1}}" active-class="active">
      <a>分享</a></router-link>
    <router-link role="presentation" tag="li" :to="{name:'Topics',params:{tab:'ask'},query:{page:1}}" active-class="active">
      <a>问答</a></router-link>
    <router-link role="presentation" tag="li" :to="{name:'Topics',params:{tab:'job'},query:{page:1}}" active-class="active">
      <a>招聘</a></router-link>
    <router-link role="presentation" tag="li" :to="{name:'Topics',params:{tab:'dev'},query:{page:1}}" active-class="active">
      <a>客户端测试</a></router-link>
  </ul>
</template>
<script>
  export default {
    name: 'tab-nav'
  }
</script>

<style>

</style>
