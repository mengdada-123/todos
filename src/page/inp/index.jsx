import React, { Component } from 'react'
import PropType from 'prop-types'
import List from '../list/index'
import './index.css'
export default class Inp extends Component {
    static PropType = {
        todoss:PropType.array.isRequired,
        updateTodo:PropType.func.isRequired,
        deleteTodo:PropType.func.isRequired
    }
    // doubleClickAll=(inp)=>{
    //     this.props.doubleClickAllone(inp)
    // }
    

    render() {
        const {todoss,updateTodo,deleteTodo,type,inp} = this.props
        return (
            <div className='Inp-box'>
                <ul className='Inp-box-ul'>
                   {
                       todoss.map((todo)=>{
                          return  <List key={todo.id} {...todo }  updateTodo={updateTodo} deleteTodo={deleteTodo} type = {type} inp = {inp}/>

                       })
                   }
                    
                </ul>
                
            </div>
        )
    }
}
