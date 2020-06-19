import React, {Component} from 'react'
import { Input, Button, List } from 'antd'

class TodoUI extends Component {
    render () {
        return (
            <div>
                <div style={{margin: '30px 20px'}}>
                    <Input
                    value={this.props.inputValue}
                    placeholder="todo info"
                    style={{width: '300px'}}
                    onChange={this.props.handleInputChange} />
                    <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
                </div>
                <List
                    style={{margin: '30px 20px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item
                        // 此处注意()
                        onClick={() => {this.props.handleItemkDelete(index)}}
                        className="item">
                        {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodoUI