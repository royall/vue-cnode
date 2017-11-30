<template>
  <ul class="nav nav-pills">
    <router-link v-for="(v,k) in tabs" role="presentation" tag="li" :to="{name:'Topics',params:{tab:k},query:{page:1}}" active-class="active" :key="k"><a>{{v}}</a>
    </router-link>
  </ul>
</template>
<script>
  import constants from '../common/constants';
  export default {
    name: 'tab-nav',
    data(){
      return {
        tabs:constants.tabMap
      }
    }
  }
</script>
