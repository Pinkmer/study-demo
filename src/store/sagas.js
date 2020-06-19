import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreation'
import axios from 'axios'

function* getInitList() {
    try {
        const res = yield axios.get('/list')
        const action = initListAction(res.data)
        yield put(action)
    } catch {
        console.log('网络请求失败')
    }
    
}

// generator函数：异步请求时不需要promise形式
function* mySaga() {
    // takeEvery捕捉每一个类型
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga