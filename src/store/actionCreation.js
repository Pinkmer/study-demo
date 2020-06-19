// 统一创建action
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// 使用thunk之后返回的对象不再是一个对象可以是一个函数
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list').then((res) => {
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
        })
    }
}
// 使用saga
// export const getItemList = () => ({
//     type: GET_INIT_LIST
// })