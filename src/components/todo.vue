<template>
  <div class="page lists-show">
      <nav>
          <div class="nav-group">
              <a class="nav-item">
                  <span class="icon-list-unordered"></span>
              </a>
          </div>
          <h1 class="title-page">
              <span class="title-wrapper">{{todo.title}}</span>
              <span class="count-list">{{todo.count}}</span>
          </h1>
          <div class="nav-group right">
              <div class="options-web">
                  <a class="nav-item">
                      <span class="icon-lock" v-if="todo.locked"></span>
                      <span class="icon-unlock" v-else></span>
                  </a>
                  <a class="nav-item">
                      <span class="icon-trash"></span>
                  </a>
              </div>
          </div>
          <div class="form todo-new input-symbol">
              <input type="text" v-model="text" placeholder="请输入"@keyup.enter='onAdd' :disabled="todo.locked" />
              <span class="icon-add"></span>
          </div>
      </nav>

      <div class="content-scrollable list-items">
          <div v-for="item in items" :key="item.id">
            <item></item>
          </div>
      </div>
  </div>
</template>

<script>
import item from './item'
import { getTodo } from '../api/api'
export default {
  components: {
    item
  },
  data () {
    return {
      todo: {
        title: 'defaultTitle',
        count: 1,
        locked: false
      },
      items: [
        { checked: false, text: '新的一天', isDelete: false }
      ],
      text: ''
    }
  },
  watch: {
    '$route.params.id' () {
      this.init()
    }
  },
  created () {
    this.init()
  },
  methods: {
    onAdd () {
      this.items.push({
        checked: false, text: this.text, isDelete: false
      })
      this.text = ''
    },

    init () {
      const ID = this.$route.params.id
      getTodo({ id: ID }).then(res => {
        let { id, title, count, isDelete, locked, record } = res.data.todo
        this.items = record
        this.todo = {
          id: id,
          title: title,
          count: count,
          locked: locked,
          isDelete: isDelete
        }
      })
    }
  }
}
</script>

<<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>

