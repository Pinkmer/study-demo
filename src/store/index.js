import { createStore, compose } from 'redux'
import reducer from './reducer'

// 创建store 传入reducer
// 注意使用chrome redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers())

export default store