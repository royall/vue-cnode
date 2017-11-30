<template>
  <section>
    <Top></Top>
    <router-view :key="key"/>
    <Bottom></Bottom>
  </section>
</template>

<script>

  import './assets/iconfont/material-icons.css';
  import Top from '@/components/Top';
  import Bottom from '@/components/Bottom';
  import Toasted from 'vue-toasted';
  import Vue from 'vue'

  Vue.use(Toasted,{
    position:'top-center',
    duration:3000,
    iconPack:'material'
  });

  export default {
    name: 'app',
    components: {
      Top,
      Bottom
    },
    computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
      }
    }
  }

</script>

<style>
 body{ background:#e1e1e1}
</style>
