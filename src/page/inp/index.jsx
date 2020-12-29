import React, { Component } from 'react'
import PropType from 'prop-types'
import List from '../list/index'
import './index.css'
export default class Inp extends Component {
    static PropType = {
        todoss: PropType.array.isRequired,
        updateTodo: PropType.func.isRequired,
        deleteTodo: PropType.func.isRequired,
        doubleClick: PropType.func.isRequired,
    }
    render() {
        const { todoss, updateTodo, deleteTodo, type, doubleClick } = this.props
        const typeMap = {
            All: () => true,
            active: (done) => done === false,
            completedAir: (done) => done === true,
        }
        return (
            <div className='Inp-box'>
                <ul className='Inp-box-ul'>
                    {
                        todoss.filter(i => typeMap[type](i.done)).map((todo) => {
                            return <List
                                onItemChange={doubleClick}
                                key={todo.id}
                                {...todo}
                                doubleClick={doubleClick}
                                updateTodo={updateTodo}
                                deleteTodo={deleteTodo}
                                type={type} />

                        })
                    }

                </ul>

            </div>
        )
    }
}
