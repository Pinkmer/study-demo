import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoUI from './TodoUI'
import {getInputChangeAction, getAddTodoItemAction, getDeleteItemAction} from './store/actionCreation'

class Todoantd extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemkDelete = this.handleItemkDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render () {
        return (
            <TodoUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleButtonClick={this.handleButtonClick}
            handleItemkDelete={this.handleItemkDelete}
            />
        )
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleButtonClick() {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }
    handleItemkDelete(index) {
        console.log(index)
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default Todoantd