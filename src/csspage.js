import React, { Component } from 'react'

class Css extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    render () {
        return (
            <div>
                <div className={this.state.show ? 'show': 'hide'}>
                    这是一个css子组件
                </div>
                <button onClick={this.handleToggle}>toggle</button>
            </div>
        )
    }
    handleToggle () {
        this.setState({
            show: this.state.show ? false : true
        })
    }
}

export default Css