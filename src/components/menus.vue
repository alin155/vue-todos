<template>
  <div class="list-todos">
      <a @click="goList(item.id)" class="list-todo" :class="{ 'active': item.id === todoId }" v-for="(item, index) in todoList" :key="index">
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
import { addTodo } from '../api/api'
export default {
  data () {
    return {
      items: [],
      todoId: ''
    }
  },
  computed: {
    todoList () {
      return this.$store.getters.getTodoList
    }
  },
  created () {
    // getTodoList({}).then(res => {
    //   const TODOS = res.data.todos
    //   this.items = TODOS
    //   this.todoId = TODOS[0].id
    //   console.log(res.data.todos)
    // })
    this.$store.dispatch('getTodo').then(() => {
      this.$nextTick(() => {
        this.goList(this.todoList[0].id)
      })
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
        // getTodoList({}).then(res => {
        //   const TODOS = res.data.todos
        //   this.todoId = TODOS[TODOS.length - 1].id
        //   this.items = TODOS
        //   console.log('addTodoList!!' + this.todoId + '---' + this.items[5].text)
        // })
        this.$store.dispatch('getTodo').then(() => {
          this.$nextTick(() => {
            this.goList(this.todoList[this.todoList.length - 1].id)
          }, 100)
        })
      })
    }
  }
}
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>
