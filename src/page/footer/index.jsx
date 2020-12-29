import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handeAll = (event) => {
        this.props.changeAll(event.target.checked)
    }
    deleteall = () => {
        this.props.deleteAll()
    }
    // all事件效果
    AllAir = () => {
        this.props.changeType('All')
    }
    // active事件效果
    activeAir = () => {
        this.props.changeType('active')
    }
    // completed事件效果
    completedAir = () => {
        this.props.changeType('completedAir')
    }


    render() {
        const { todoss, type } = this.props
        const todovalue = todoss.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const todosLeng = todoss.length
        const leftall = todosLeng - todovalue
        return (
            <div className='Footer-box' style={{ display: todosLeng !== 0 ? 'block' : 'none' }}>
                <input type="checkbox"
                 onChange={this.handeAll} 
                 checked={todovalue === todosLeng && todosLeng !== 0 ? true : false} />
                <span className='Footer-span1'>
                    <strong className='footer-stron'>
                        {leftall}
                    </strong>
                    items left
                </span>

                <span className={type === 'All' ? 'footer-span-border active' : 'footer-span-border'} 
                onClick={this.AllAir}>
                    All

                </span>
                <span className={type === 'active' ? 'footer-span-border active' : 'footer-span-border'} 
                onClick={this.activeAir}>
                    active
                </span>
                <span className={type === 'completedAir' ? 'footer-span-border active' : 'footer-span-border'}
                 onClick={this.completedAir} >
                    completed
                </span>
                <button className='Footer-button' 
                onClick={this.deleteall} 
                style={{ display: todovalue !== 0 ? 'block' : 'none' }}>Clear completed</button>
            </div>
        )
    }
}
