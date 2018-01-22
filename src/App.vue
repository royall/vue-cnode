<template>
  <section>
    <top/>
    <router-view/>
    <bottom/>
  </section>
</template>

<script>

  import './assets/iconfont/material-icons.css';
  import Top from './components/Top';
  import Toasted from 'vue-toasted';
  import Vue from 'vue';
  import './common/filter';
  import store from './store/index';
  import Bottom from "./components/Bottom";

  Vue.use(Toasted, {
    singleton: true,
    position: 'top-center',
    duration: 3000,
    iconPack: 'material'
  });

  Vue.toasted.register('loading', 'Loading...', {
    icon: 'hourglass_empty',
    duration: null
  });

  export default {
    name: 'app',
    components: {
      Bottom,
      Top,
    },
    store
  }

</script>

<style>
  body{
    background:#e1e1e1
  }
</style>
