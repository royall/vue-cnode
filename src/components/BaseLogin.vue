<template>
  <transition name="custom-classes-transition"
    enter-active-class="animated bounceInRight"
    leave-active-class="animated bounceOutRight">
  <div v-if="this.$store.state.showLoginDialog" class="modal" id="myModal" tabindex="-1" style="background:rgba(0,0,0,0.5);display:block">
    <div class="modal-dialog" style="top: 70px">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×
          </button>
          <h4 class="modal-title" id="myModalLabel">
            请输入accessToken </h4>
        </div>
        <div class="modal-body">
          <div class="alert alert-warning" role="alert">如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。</div>
          <input class="form-control" placeholder="请输入accessToken" ref="accessToken"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="close">
            关闭
          </button>
          <button type="button" class="btn btn-primary" @click="submit">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
  </transition>


</template>
<script>
  import {mutations} from '../common/constants'

  export default {
    name: 'base-login',
    data() {
      return {}
    },
    methods: {
      async submit() {
        const accessToken = this.$refs.accessToken.value;
        try {
          await this.$store.dispatch('login', accessToken) && this.close();
        } catch (e) {
          console.log('login fail');
        }
      },
      close() {
        this.$refs.accessToken.value = '';
        this.$store.commit(mutations.CLOSELOGINDIALOG);
      }
    }
  }
</script>

<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
