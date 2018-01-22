<template>
  <div v-if="this.$store.state.showLoginDialog" class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="background:rgba(0,0,0,0.5);opacity: 1;display:block">
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

</template>
<script>

  export default {
    name: 'login',
    data() {
      return {}
    },
    methods: {
      submit() {
        let accessToken = this.$refs.accessToken.value;
        this.$store.dispatch('login', accessToken).then(() => {
          this.close();
        }).catch(() => {
          console.log('login fail');
        });
      },
      close() {
        this.$refs.accessToken.value = '';
        this.$store.commit('closeLoginDialog');
      }
    }
  }
</script>
