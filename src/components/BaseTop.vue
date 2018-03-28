<template>
  <header class="navbar header">
    <div class="navbar-inner">
      <div class="container">
        <div class="brand pull-left">
          <a href="#/"></a>
        </div>
        <div class="right-links">
          <a v-if="!isLogin" @click="showLoginDialog" href="javascript:">登录</a> <span v-if="isLogin">
            <router-link :to="{name:'UserIndex',params:{loginname:userInfo.loginname}}">{{userInfo.loginname}}</router-link> ( {{msgCount}} ) &nbsp;&nbsp;|&nbsp;&nbsp;
            <a @click="logout" href="javascript:">退出</a>
          </span>
        </div>
      </div>
    </div>
    <base-login/>
  </header>
</template>

<script>
  import api from "../common/api"
  import BaseLogin from "./BaseLogin";
  import {mutations} from '../common/constants'

  export default {
    name: 'base-top',
    components: {
      BaseLogin
    },
    data() {
      return {
        showLogin: false,
        msgCount: 0
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin
      },
      userInfo() {
        return this.$store.state.userInfo
      },
      accesstoken() {
        return this.$store.state.accesstoken
      }
    },
    methods: {
      showLoginDialog() {
        this.$store.commit(mutations.SHOWLOGINDIALOG)
      },
      logout() {
        this.$store.commit(mutations.LOGOUT)
      }
    },
    async mounted() {
      if (this.accesstoken) {
        const res = api.getMessageCount(this.accesstoken);
        this.msgCount = res.data.data;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .brand{
    line-height:50px;
    color:#fff;
    font-size:24px;
  }
  .brand a{
    color:#fff;
    text-decoration:none
  }
  .header{
    background:#444
  }
  .right-links{
    color:#fff;
    line-height:50px;
    float:right
  }
  .right-links a{
    color:#fff
  }
</style>
