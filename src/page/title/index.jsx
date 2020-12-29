import React, { Component } from 'react';
import './index.css'
class index extends Component {
    state={
        opacity:1,
        opacity1:1,
        opacity2:1,
    }
    add =()=>{
        this.props.login()
    }
    cool=()=>{
        setInterval(()=>{
            let {opacity} = this.state
            opacity -= 0.1
            if(opacity <= 0){
                opacity  = 1
            }
            this.setState({
                opacity 
            })
        },200)
    }
    cool2=()=>{
        setInterval(()=>{
            let {opacity1} = this.state
            opacity1 -= 0.1
            if(opacity1 <= 0){
                opacity1  = 1
            }
            this.setState({
                opacity1 
            })
        },200)
    }
    cool3=()=>{
        setInterval(()=>{
            let {opacity2} = this.state
            opacity2 -= 0.1
            if(opacity2<= 0){
                opacity2  = 1
            }
            this.setState({
                opacity2 
            })
        },200)
    }

    render() {
        return (
            <div className='title-box'  onClick={this.add}>
                <h1>
                    <span onClick={this.cool} className='span1' style={{opacity:this.state.opacity}}> Do </span>
                    <span onClick={this.cool2} className='span2' style={{opacity:this.state.opacity1}}> it </span>
                    <span onClick={this.cool3} className='span3'  style={{opacity:this.state.opacity2}}>Now</span>
                    </h1>
                
            </div>
        );
    }
}

export default index;