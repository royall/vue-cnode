<template>
  <footer class="footer"></footer>
</template>

<script>
import api from '../common/api';

export default {
  name: 'Bottom',
  data () {
    return {
      topic:{}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer{ background:#fff; height:100px}
</style>
