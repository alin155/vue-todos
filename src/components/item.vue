<template>
  <div class="list-item editingClass editing">
      <label class="checkbox">
          <input type="checkbox" v-model="item.checked" />
          <span class="checkbox-custom"></span>
      </label>
      <input type="text" v-model="item.text" placeholder="something" />
      <a class="delete-item">
          <span class="icon-trash"></span>
      </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          checked: false,
          text: 'itemDefault'
        }
      }
    }
  }
}
</script>

<<style lang="less">
@import '../common/style/list-items.less';
</style>
