<template>
  <div v-if="isShow" class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="background:rgba(0,0,0,0.5);opacity: 1;display:block">
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
          <input class="form-control" placeholder="请输入accessToken" ref="accessToken" :value="accessToken"/>
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
  import api from '../common/api'
  export default {
    name: 'Login',
    props: {
      show: Number
    },
    data() {
      return {
        isShow: this.show,
        accessToken: localStorage.getItem('accessToken')
      }
    },
    methods: {
      submit() {
        let accessToken = this.$refs.accessToken.value;
        api.validateAccesstoken(accessToken).then(res => {
          console.log('validateAccesstoken', res);
          localStorage.setItem('accessToken', accessToken);
          this.accessToken = accessToken;
          this.isShow = 0;
          this.$emit('login');
        }).catch(error=>{
          this.$toasted.clear();
          this.$toasted.error('无效的accessToken');
        });
      },
      close() {
        this.isShow = 0;
        console.log('this',this);
      }
    },
    watch: {
      show(val) {
        this.isShow = val;
      },
      isShow(val) {
        this.$emit('changeShow', val);
      }
    }
  }
</script>
