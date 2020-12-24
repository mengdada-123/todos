import React, { Component } from 'react'
import Header from './page/header'
import Inp from './page/inp'
import Footer from './page/footer'
import Title from './page/title'
import './App.css'

export default class App extends Component {
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:false},
    ],
    type:'All',
    inp:false
  }

  // doubleClickAllone=(inp)=>{
  //   console.log(inp);

  // }


  changeType=(type)=>{
    this.setState({type:type})
  }


addTodo = (todoObj)=>{
  const {todos} = this.state
  const newtodos = [todoObj,...todos]
  this.setState({todos:newtodos})
}

updateTodo = (id,dome) =>{
  const {todos} = this.state
  const newtodos= todos.map((todoObj)=>{
    if(todoObj.id===id) return {...todoObj,done:dome}
    else return todoObj
  })
  this.setState({todos:newtodos})

}

deleTodo = (id)=>{
  const{todos}= this.state
  const newTodos = todos.filter((todoObj)=>{
    return todoObj.id!==id
    })
    this.setState({todos:newTodos})
}


changeAll=(done)=>{
  const {todos}= this.state
 const  newtodos= todos.map((item)=>{
    return {...item,done:done}
  })
  this.setState({todos:newtodos})
}
deleteAll=()=>{
  const {todos} = this.state
  const delall = todos.filter((item)=>{
    if(item.done==false){
      return {...item}
    }
  })
  this.setState({todos:delall})

}

activeAir=()=>{
  const {todos} = this.state
  const Air = todos.filter((item)=>{
    if(item.done == false){
      return {...item}
    }
  })
  this.setState({todos2:Air})
}

logh=()=>{
  const loo = JSON.parse(window.localStorage.getItem('todos'))
  console.log(loo);
}


  render() {
    const {todos} = this.state
    const {type} = this.state
    const storage = window.localStorage
    const strjson  = JSON.stringify(todos)
    storage.setItem('todos',strjson)
    console.log(storage.setItem);

    return (
      <div className='box'>
      <Title login = {this.logh} />
      <Header addtos = {this.addTodo}/>
      <Inp type={type}  todoss={todos}  updateTodo={this.updateTodo} deleteTodo={this.deleTodo} />
      <Footer todoss={todos} changeAll={this.changeAll}  type={type} deleteAll = {this.deleteAll}  changeType = {this.changeType}/>
    </div>
    )
  }
}
export {
  App
} 