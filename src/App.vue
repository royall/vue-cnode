<template>
  <section>
    <base-top/>
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated zoomOut" mode="out-in">
      <router-view/>
    </transition>
    <base-bottom/>
  </section>
</template>

<script>

  import './assets/iconfont/material-icons.css';
  import './assets/css/animate.css';
  import BaseTop from './components/BaseTop';
  import Toasted from 'vue-toasted';
  import Vue from 'vue';
  import './common/filter';
  import store from './store/index';
  import BaseBottom from "./components/BaseBottom";

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
      BaseBottom,
      BaseTop,
    },
    store
  }

</script>

<style>
  body{
    background:#e1e1e1
  }
</style>
