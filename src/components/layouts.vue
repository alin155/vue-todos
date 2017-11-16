<template>
 <section class='container' :class="{ 'menu-open': menuOpen }">
     <section class="menu">
         <menus></menus>
     </section>
     <div class="content-overlay" @click="$store.dispatch('updateMenu')"></div>
     <section class="content-container">
         <!-- <todo></todo> -->
         <router-view></router-view>
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
  },
  computed: {
    menuOpen () {
      return this.$store.state.menuOpen
    }
  }
}
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>


