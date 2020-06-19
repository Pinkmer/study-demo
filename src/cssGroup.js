import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'

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
                <CSSTransition
                in={this.state.show}
                timeout={1000}
                onEntered={(el) => {el.style.color='red'}}>
                <div className='fade'>
                    这是一个tansition-group子组件
                </div>
                <button onClick={this.handleToggle}>toggle</button>
                </CSSTransition>
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