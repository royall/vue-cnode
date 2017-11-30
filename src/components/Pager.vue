<template>

  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li>
        <router-link :to="{name:name,params:{tab:tab},query:{page:page-1<=1?1:page-1}}" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <router-link exact-active-class="active" tag="li" v-for="p in pageObj" :to="{name:name,params:{tab:tab},query:{page:p.page}}" :key="p.page"><a>{{p.page}}</a></router-link>
      <li>
        <router-link :to="{name:name,params:{tab:tab},query:{page:page+1}}" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
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
