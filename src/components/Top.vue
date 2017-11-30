<template>
  <header class="navbar header">
    <div class="navbar-inner">
      <div class="container">
        <div class="right-links">
          <a href="#/">首页</a> |
          <a v-if="!isLogin" @click="login" href="javascript:;">登录</a>
          <a v-if="isLogin" @click="logout" href="javascript:;">退出</a>
        </div>
      </div>
    </div>
    <Login :show="showLogin" @changeShow="changeLoginShow" @login="changeLogin"></Login>
  </header>
</template>

<script>
  import Login from "./Login"
  import utils from "../common/utils"

  export default {
    name: 'Top',
    components:{
      Login
    },
    data() {
      return {
        isLogin:utils.getToken(),
        showLogin:0
      }
    },
    methods:{
      login(){
        this.showLogin=1;
      },
      logout(){
        this.isLogin=0;
        utils.logout();
      },
      changeLoginShow(val){
        this.showLogin=val;
      },
      changeLogin(){
        this.isLogin=1;
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{ background:#444}
  .right-links{ color:#fff; line-height:50px; float:right}
  .right-links a{ color:#fff}
</style>
