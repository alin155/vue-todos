<template>
  <div class="list-todos">
      <a @click="goList(item.id)" class="list-todo"  v-for="item in items" :key="item.todoId">
          <span class="icon-lock" v-if="item.locked"></span>
          <span class="count-list" v-if="item.count">{{item.count}}</span>
          {{item.title}}
      </a>
      <a @click="addTodoList" class="link-list-new" >
          <span class="icon-plus"></span>
          新增
      </a>
  </div>
</template>

<script>
import { getTodoList, addTodo } from '../api/api'
export default {
  data () {
    return {
      items: [],
      todoId: ''
    }
  },
  created () {
    getTodoList({}).then(res => {
      const TODOS = res.data.todos
      this.items = TODOS
      this.todoId = TODOS[0].id
      console.log(res.data.todos)
    })
  },
  watch: {
    'todoId' (id) {
      this.$router.push({ name: 'Todo', params: { id: id } })
    }
  },
  methods: {
    goList (id) {
      this.todoId = id
    },
    addTodoList () {
      addTodo({}).then(data => {
        getTodoList({}).then(res => {
          const TODOS = res.data.todos
          this.todoId = TODOS[TODOS.length - 1].id
          this.items = TODOS
          console.log('addTodoList!!' + this.todoId + '---' + this.items)
        })
      })
    }
  }
}
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>
