<template>
  <transition name="slide-fade">
    <div class="list-item editingClass editing" :class="{ checked: item.checked }" v-show="!item.isDelete">
        <label class="checkbox">
            <input type="checkbox" v-model="item.checked" name="checked" @change="onChange" :disabled='locked'>
            <span class="checkbox-custom"></span>
        </label>
        <input type="text" v-model="item.text" placeholder="something" :disabled='item.checked || locked' @keyup.enter="onChange">
        <a class="delete-item" v-if="item.checked && !locked" @click="item.isDelete = true; onChange()">
            <span class="icon-trash"></span>
        </a>
    </div>
  </transition>
</template>

<script>
import { editRecord } from '../api/api'
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
    },
    'index': {

    },
    'id': {

    },
    'init': {

    },
    'locked': {

    }
  },
  methods: {
    onChange () {
      editRecord({
        id: this.id, record: this.item, index: this.index
      }).then(data => {
        this.init()
        this.$store.dispatch('getTodo')
      })
    }
  }
}
</script>

<<style lang="less">
@import '../common/style/list-items.less';
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
slide-fade-enter, .slide-fade-leave-action {
  transition: translateX(10px);
  opacity: 0;
}
</style>
