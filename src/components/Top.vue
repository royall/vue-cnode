<template>
  <header class="navbar header">
    <div class="navbar-inner">
      <div class="container">
        <div class="right-links">
          <a href="#/">首页</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a v-if="!isLogin" @click="login" href="javascript:;">登录</a>
          <span v-if="isLogin" >
            <router-link :to="{name:'UserIndex',params:{loginname:userInfo.loginname}}">{{userInfo.loginname}}</router-link> ( {{msgCount}} ) &nbsp;&nbsp;|&nbsp;&nbsp;
            <a @click="logout" href="javascript:;">退出</a>
          </span>
        </div>
      </div>
    </div>
    <Login :show="showLogin" @changeShow="changeLoginShow" @login="changeLogin"></Login>
  </header>
</template>

<script>
  import Login from "./Login"
  import utils from "../common/utils"
  import api from "../common/api"

  export default {
    name: 'Top',
    components:{
      Login
    },
    data() {
      return {
        isLogin:utils.getToken(),
        showLogin:0,
        userInfo:utils.getUserInfo(),
        accesstoken:utils.getToken(),
        msgCount:0
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
    mounted(){
      this.accesstoken && api.getMessageCount(this.accesstoken).then(res=>{
        this.msgCount=res.data.data;
      });
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{ background:#444}
  .right-links{ color:#fff; line-height:50px; float:right}
  .right-links a{ color:#fff}
</style>
