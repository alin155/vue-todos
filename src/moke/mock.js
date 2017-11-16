import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import { Todos } from './data/todoList'

export default {
  start () {
    let mock = new MockAdapter(Axios)
    mock.onGet('/todo/list').reply(config => {
      let mockTodo = Todos.map(todo => {
        return {
          id: todo.id,
          title: todo.title,
          count: todo.record.filter((data) => {
            if (data.checked === false) return true
            return false
          }).length,
          locked: todo.locked,
          isDelete: todo.isDelete
        }
      }).filter(todo => {
        if (todo.isDelete === true) return false
        return true
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: mockTodo
          }])
        }, 200)
      })
    })

    mock.onGet('/todo/listId').reply(config => {
      let { id } = config.params
      let todo = Todos.find(todo => {
        return id && todo.id === id
      })
      todo.count = todo.record.filter((data) => {
        return data.checked === false
      }).length
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todo: todo
          }])
        }, 200)
      })
    })

    mock.onPost('/todo/addRecord').reply(config => {
      let {
        id,
        text
      } = JSON.parse(config.data)
      Todos.some((t, index) => {
        if (t.id === id) {
          t.record.push({
            text: text,
            isDelete: false,
            checked: false
          })
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })

    mock.onPost('/todo/addTodo').reply(config => {
      Todos.push({
        id: Mock.Random.guid(),
        title: 'newList',
        isDelete: false,
        locked: false,
        record: []
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })

    mock.onPost('/todo/editTodo').reply(config => {
      let { todo } = JSON.parse(config.data)
      Todos.some((t, index) => {
        if (t.id === todo.id) {
          t.title = todo.title
          t.locked = todo.locked
          t.isDelete = todo.isDelete
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })

    mock.onPost('/todo/editRecord').reply(config => {
      let { id, record, index } = JSON.parse(config.data)
      Todos.some((t) => {
        if (t.id === id) {
          t.record[index] = record
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })
  }
}
