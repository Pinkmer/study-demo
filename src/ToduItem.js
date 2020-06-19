import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor (props) {
        super(props)
        // bind(this)修改this指向
        this.handleClick = this.handleClick.bind(this)
    }

    // 提升性能，当变化时重新渲染，无变化不渲染
    shouldComponentUpate (nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }

    render () {
        // 子组件接收父组件传值
        // 调用父组件的方法
        // 单向数据流：父组件只能向子组件传递数据，子组件不能修改父组件的数据
        const content = this.props.content
        const test = this.props.test
        return (
            <div onClick={this.handleClick} key={content}>
                {test} - {content}
            </div>
        )
    }
    // 子组件调用父组件的方法 要在父组件里改变this指向
    handleClick () {
        const {ItemDelte, index} = this.props
        ItemDelte(index)
    }
}
// 限制要求父组件传给子组件类型
// isRequired表示必须传值
// content可以为number或者string
TodoItem.propTypes = {
    test: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ItemDelte: PropTypes.func,
    index: PropTypes.number
}
// 父组件未传值时，给一个默认值
TodoItem.dafaultProps = {
    test: 'hello'
}

export default TodoItem;