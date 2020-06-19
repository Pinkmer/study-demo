import React, {Fragment, Component} from 'react'
import TodoItem from './ToduItem'
import Css from './csspage'

class Todo extends Component {
    // 最优先执行的函数
    // constructor与super必须搭配
    constructor (props) {
        super(props)
        // 当组件的state或者props发生改变时，render函数会重新执行
        this.state = {
            inputValue: '',
            list: ['学习','减肥']
        }
        this.handleItemDelt=this.handleItemDelte.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }
    // JSX语法块
    render () {
        return (
            // Fragment占位符组件
            <Fragment>
                <label htmlFor="insertArea">输入内容</label>
                <input
                id="insertArea"
                value={this.state.inputValue}
                onChange={this.handleInputChange} /><button onClick={this.handleBtnClick}>提交</button>
                <ul className='ulbox'>
                    {this.getTodoItem()}
                </ul>
                <Css></Css>
            </Fragment>
            )
        }
        getTodoItem () {
            return  this.state.list.map((item, index) => {
                return (
                    <div>
                        {/* 父组件向子组件传值：直接传 */}
                        <TodoItem
                        content={item}
                        index={index}
                        ItemDelte={this.handleItemDelt}/>
                        {/* 注意注释 */}
                        {/* <li
                        key={index}
                        onClick={this.handleItemDelte.bind(this, index)}
                        dangerouslySetInnerHTML={{__html:item}} ></li> */}
                </div>
                )
            })
        }
    handleInputChange(e) {
        // this.setState 改变数据旧版
        // this.setState({
        //     inputValue: e.target.value
        // })
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }), () => {
            // setState是个异步函数 支持传递第二个值 可在成功回调后执行
        })
    }
    handleBtnClick (){
        // this.setState({
        //     // 把this.state.list展开拼接成一个全新的数组
        //     list: [...this.state.list,this.state.inputValue],
        //     inputValue: ''
        // })
        // prevState：接收参数前的值
        this.setState((prevState) => ({
            list: [...prevState.list,prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelte(index) {
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list: list
        // })
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }
}

    
export default Todo