import React from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件：定义一个UI组件时候，只有一个render函数时
const TodoUI = (props) => {
    return (
        <div>
            <div style={{margin: '30px 20px'}}>
                <Input
                value={props.inputValue}
                placeholder="todo info"
                style={{width: '300px'}}
                onChange={props.handleInputChange} />
                <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
            </div>
            <List
                style={{margin: '30px 20px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item
                    // 此处注意()
                    onClick={() => {props.handleItemkDelete(index)}}
                    className="item">
                    {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

// class TodoUI extends Component {
//     render () {
//         return (
//             <div>
//                 <div style={{margin: '30px 20px'}}>
//                     <Input
//                     value={this.props.inputValue}
//                     placeholder="todo info"
//                     style={{width: '300px'}}
//                     onChange={this.props.handleInputChange} />
//                     <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//                 </div>
//                 <List
//                     style={{margin: '30px 20px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item
//                         // 此处注意()
//                         onClick={() => {this.props.handleItemkDelete(index)}}
//                         className="item">
//                         {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

export default TodoUI