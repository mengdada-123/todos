import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
     state = {
        mouse:false,
        inp:false
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


    // 双击事件后input框显示出来
    doubleClickAll=()=>{
    //    const {id} = this.props;
    //    this.props.doubleClick(id)
       const {inp} = this.state
       const towinp = !inp
       this.setState({
           inp:towinp
       })
     

    }

    onChangeAll=()=>{
        const {inp} = this.state
        const towinp = !inp
        this.setState({
            inp:towinp
        })
      
        

    }
    onChangeFocus=()=>{
        console.log(123);
    }

    onTextChange = (e, id) =>{
        this.onChangeFocus()
        const {onItemChange} = this.props;
        onItemChange(e.target.value,id)
        // console.log(id);
    }

    render() {
        const {id,name,done,type} = this.props
        const {inp} = this.state
        // console.log(name);
        if( type=='All'){
            return (
                <li className='List-list' style={{backgroundColor:this.state.mouse ? '' : '#000'}} onDoubleClick={this.doubleClickAll} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                    <input type="checkbox" onChange={this.handleCheck(id)}  checked={done}/>
                    <span  className={inp == false ? 'block' : 'none'} style={{textDecoration:done==true ? 'line-through': '',color:done===true?'#f00':'#FFF',color:this.state.mouse?'#00FFFF':''}}>
                        {name}
                    </span>
                    <input className={inp == true ? 'block List-input-text' : 'none'}  value={name} type="text" onChange={(e) => this.onTextChange(e, id)} onBlur={this.onChangeAll} />

                    </label>
                    <button className='List-list-button' onClick={()=>{this.handleDelete(id)}}  style={{ display:this.state.mouse ? 'block' : '' }} >删 除</button>
                </li>
             )
        }else if (type === 'active' && done === false) {
            return (
                <li className='List-list' style={{backgroundColor:this.state.mouse ? '' : '#000'}} onDoubleClick={this.doubleClickAll} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                <input type="checkbox" onChange={this.handleCheck(id)}  checked={done}/>
                <span className={inp == false ? 'block' : 'none'} style={{textDecoration:done==true ? 'line-through': '',color:done===true?'#f00':'#FFF',color:this.state.mouse?'#00FFFF':''}}>
                    {name}
                </span>
                <input className={inp == true ? 'block List-input-text' : 'none'} value={name}  type="text" onChange={(e) => this.onTextChange(e, id)} onBlur={this.onChangeAll} onFocus={this.onChangeFocus}/>

                </label>
                <button className='List-list-button' onClick={()=>{this.handleDelete(id)}}  style={{ display:this.state.mouse ? 'block' : '' }} >删 除</button>
            </li>
            )
            
        }else if(type==='completedAir' && done === true){
            return(
                <li className='List-list' style={{backgroundColor:this.state.mouse ? '' : '#000'}} onDoubleClick={this.doubleClickAll} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                <input type="checkbox" onChange={this.handleCheck(id)}  checked={done}/>
                <span className={inp == false ? 'block' : 'none'} style={{textDecoration:done==true ? 'line-through': '',color:done===true?'#f00':'#FFF',color:this.state.mouse?'#00FFFF':''}}>
                    {name}
                </span>
                <input className={inp == true ? 'block List-input-text' : 'none'} value={name}  type="text" onChange={(e) => this.onTextChange(e, id)} onBlur={this.onChangeAll} onFocus={this.onChangeFocus}/>

                </label>
                <button className='List-list-button' onClick={()=>{this.handleDelete(id)}}  style={{ display:this.state.mouse ? 'block' : '' }} >删 除</button>
            </li>
            )

        }
        else{
            return  null
        }
      
    }
}