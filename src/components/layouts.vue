<template>
 <section class='container'>
     <section class="menu">
         <menus></menus>
     </section>
     <section class="content-container">
         <todo></todo>
     </section>
 </section> 
</template>
<script>
import menus from './menus'
import todo from './todo'
export default {
  components: {
    menus,
    todo
  }
}
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>


