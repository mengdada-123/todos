import React, { Component } from 'react'
import Header from './page/header'
import Inp from './page/inp'
import Footer from './page/footer'
import Title from './page/title'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: false },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: false },
    ],
    type: 'All',
    inp: false
  }

  changeType = (type) => {
    this.setState({ type: type })
  }
  
  componentDidMount () {

    const todo = JSON.parse(localStorage.getItem('Todos'));
    this.setState({ todos: todo });

  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newtodos = [todoObj, ...todos]
    window.localStorage.setItem('Todos',JSON.stringify(newtodos))
    this.setState({
      todos: newtodos 
     })

  }

  updateTodo = (id, dome) => {
    const { todos } = this.state
    const newtodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: dome }
      else return todoObj
    })
    this.setState({ 
      todos: newtodos 
    })
  }

  
  deleTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    window.localStorage.setItem('Todos',JSON.stringify(newTodos))
    this.setState({ 
      todos: newTodos 
    })
  }


  changeAll = (done) => {
    const { todos } = this.state
    const newtodos = todos.map((item) => {
      return { ...item, done: done }
    })
    this.setState({ todos: newtodos })
  }
  

  deleteAll = () => {
    const { todos } = this.state
    const delall = todos.filter((item) => {
      if (item.done === false) {
        return { ...item }
      }
    })
    this.setState({ todos: delall })

  }

  activeAir = () => {
    const { todos } = this.state
    const Air = todos.filter((item) => {
      if (item.done === false) {
        return { ...item }
      }
    })
    this.setState({ todos2: Air })
  }
  // 双击改变input
  doubleClick = (name, id) => {
    const { todos } = this.state
    const idx = todos.findIndex(item => item.id === id);
    todos.splice(idx, 1, {
      ...todos[idx],
      name
    });
    window.localStorage.setItem('Todos',JSON.stringify(todos))
    this.setState({
      todos
    });
  }



  render() {
    const { todos,type } = this.state

    return (
      <div className='box'>
        <Title  />
        <Header addtos={this.addTodo} />
        <Inp
          type={type}
          todoss={todos}
          updateTodo={this.updateTodo} deleteTodo={this.deleTodo} doubleClick={this.doubleClick} />

        <Footer 
           todoss={todos}
           changeAll={this.changeAll}
           type={type}
           deleteAll={this.deleteAll}
           changeType={this.changeType} />
      </div>
    )
  }
}
export {
  App
} 