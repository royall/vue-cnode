<template>

  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li>
        <a href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <router-link exact-active-class="active" tag="li" v-for="p in pageObj" :to="{name:name,params:{tab:tab},query:{page:p.page}}" :key="p.page"><a>{{p.page}}</a></router-link>
      <li>
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>

</template>
<script>
  export default {
    name: 'Pager',
    props:{
      page:Number,
      tab:String,
      name:String
    },
    computed:{
      pageObj(){
        let startPage=this.startPage,
            endPage=this.endPage,
            pageObj=[];
        for(let i=startPage;i<=endPage;i++){
          pageObj.push({
            page:i
          })
        }
        return pageObj;
      },
      startPage(){
        return this.page>3?this.page-2:1;
      },
      endPage(){
        return this.page>3?this.page+2:5
      }
    }
  }
</script>

<style>

</style>
