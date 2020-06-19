import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// saga配置
// import createSagaMiddleware from 'redux-saga'
// import todoSagas from './sagas'

// 创建store 传入reducer
// 注意使用chrome redux开发者工具

// const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    // applyMiddleware就是Redux的一个原生方法，将所有中间件组成一个数组，依次执行。中间件多了可以当做参数依次传进去
    applyMiddleware(thunk)
)
// saga
// const enhancer = composeEnhancers(
//     applyMiddleware(sagaMiddleware)
// )


const store = createStore(
    reducer,
    enhancer
)
// sagaMiddleware.run(todoSagas)

export default store