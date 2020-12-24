import React, { Component } from 'react';
import './index.css'
class index extends Component {
    add =()=>{
        this.props.login()
    }

    render() {
        return (
            <div className='title-box' onClick={this.add}>
                <h1>TodoList</h1>
                
            </div>
        );
    }
}

export default index;