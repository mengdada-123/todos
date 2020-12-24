import React, { Component } from 'react'
import PropType from 'prop-types'
import './index.css'
export default class Header extends Component {
    static PropType = {
        addTodo:PropType.func.isRequired
    }

    handleKeyUp =(event) =>{
        const {keyCode,target} = event
        if(keyCode === 13 && target.value != ''){
            const todoObj = {id:Date.now(),name:target.value,done:false}
            this.props.addtos(todoObj)
            target.value =''
        }      
    }
    render() {
        return (
            <div className='header-box'>
                <input type="text" className='header-box-input' onKeyUp={this.handleKeyUp} placeholder='What needs to be done'/>
            </div>
        )
    }
}
