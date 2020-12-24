import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
     state = {
        mouse:false
    }
    handleMouse=(falg)=>{
        return()=>{
            // console.log(falg);
            this.setState({mouse:falg})
        }
        

    }
    handleCheck=(id)=>{
        return(event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
        
    }
    handleDelete =(id)=>{
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
        
    }

    render() {
        const {id,name,done,type} = this.props
        const {inp} = this.state
        console.log(inp);
        if( type=='All'){
            return (
                <li className='List-list' style={{backgroundColor:this.state.mouse ? '' : '#000'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                    <input type="checkbox" onChange={this.handleCheck(id)}  checked={done}/>
                    <span style={{textDecoration:done==true ? 'line-through': '',color:done===true?'#f00':'#FFF',color:this.state.mouse?'#00FFFF':''}}>
                        {name}
                    </span>
                    </label>
                    <button className='List-list-button' onClick={()=>{this.handleDelete(id)}}  style={{ display:this.state.mouse ? 'block' : '' }} >删除</button>
                </li>
             )
        }else if (type === 'active' && done === false) {
            return (
                <li className='List-list' style={{backgroundColor:this.state.mouse ? '' : '#000'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                <input type="checkbox" onChange={this.handleCheck(id)}  checked={done}/>
                <span style={{textDecoration:done==true ? 'line-through': '',color:done===true?'#f00':'#FFF',color:this.state.mouse?'#00FFFF':''}}>
                    {name}
                </span>
                </label>
                <button className='List-list-button' onClick={()=>{this.handleDelete(id)}}  style={{ display:this.state.mouse ? 'block' : '' }} >删除</button>
            </li>
            )
            
        }else if(type==='completedAir' && done === true){
            return(
                <li className='List-list' style={{backgroundColor:this.state.mouse ? '' : '#000'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                <input type="checkbox" onChange={this.handleCheck(id)}  checked={done}/>
                <span style={{textDecoration:done==true ? 'line-through': '',color:done===true?'#f00':'#FFF',color:this.state.mouse?'#00FFFF':''}}>
                    {name}
                </span>
                </label>
                <button className='List-list-button' onClick={()=>{this.handleDelete(id)}}  style={{ display:this.state.mouse ? 'block' : '' }} >删除</button>
            </li>
            )

        }
        else{
            return  null
        }
      
    }
}