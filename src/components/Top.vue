<template>
  <header class="navbar header">
    <div class="navbar-inner">
      <div class="container">
        <div class="right-links">
          <a href="#/">首页</a> |
          <a v-if="!isLogin">登录</a>
          <a v-if="isLogin">退出</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Top',
    data() {
      return {
        isLogin:false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{ background:#444}
  .right-links{ color:#fff; line-height:50px; float:right}
  .right-links a{ color:#fff}
</style>
