<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
       style="background:rgba(0,0,0,0.5)" :style="style">
    <div class="modal-dialog" style="top: 70px">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="close">×
          </button>
          <h4 class="modal-title" id="myModalLabel">
            请输入accessToken
          </h4>
        </div>
        <div class="modal-body">
          <div class="alert alert-warning" role="alert">如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。</div>
          <input class="form-control" placeholder="请输入accessToken"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="close">
            关闭
          </button>
          <button type="button" class="btn btn-primary" @click="">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Login',
    props: {
      show: Number
    },
    data() {
      return {
        isShow: this.show
      }
    },
    computed: {
      style() {
        return this.isShow ? {
          display: 'block',
          opacity: 1
        } : {
          display: 'none',
          opacity: 0
        }
      }
    },
    methods: {
      submit() {
        
      },
      close() {
        this.isShow = 0
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

<style>

</style>
