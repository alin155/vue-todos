import Axios from 'axios'

export const getTodoList = params => {
  return Axios.get('/todo/list', {
    params: params
  })
}

export const addTodo = params => {
  return Axios.post('/todo/addTodo', params).then(res => res.data)
}

export const getTodo = params => {
  return Axios.get('/todo/listId', {
    params: params
  })
}
