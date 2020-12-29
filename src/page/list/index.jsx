import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
	state = {
		mouse: false,
		inp: false
	}

	autofocusAll = React.createRef()

	handleMouse = (falg) => {
		return () => {
			// console.log(falg);
			this.setState({ mouse: falg })
		}


	}
	handleCheck = (id, event) => {
		this.props.updateTodo(id, event.target.checked)
	}
	handleDelete = (id) => {
		if (window.confirm('确定删除吗？')) {
			this.props.deleteTodo(id)
		}

	}


	// 双击事件后input框显示出来
	doubleClickAll = () => {
		const { inp } = this.state
		const towinp = !inp
		// this.autofocus.focus
		this.setState({
			inp: towinp
		})
		setTimeout(()=>{
			this.autofocusAll.current.focus()
		},0)
	}

	onChangeAll = () => {
		const { inp } = this.state
		const towinp = !inp
		this.setState({
			inp: towinp
		})


	}
	onChangeFocus = () => {
		// console.log(123);
	}

	onTextChange = (e, id) => {
		this.onChangeFocus()
		const { onItemChange } = this.props;
		onItemChange(e.target.value, id)
	}



	render() {
		const { id, name, done, type } = this.props
		const { inp } = this.state
		return (
			<li className='List-list' 
			style={{ backgroundColor: this.state.mouse ? '' : '#000' }}
			 onDoubleClick={this.doubleClickAll}
			 onMouseLeave={this.handleMouse(false)}
			 onMouseEnter={this.handleMouse(true)}>
				<label>
					<input type="checkbox" onChange={(e) => this.handleCheck(id, e)} checked={done} />
					<span className={inp === false ? 'block' : 'none'}
						style={{ textDecoration: done === true ? 'line-through' : '',
						 color: done === true ? '#f00' : '#FFF', 
						 color: this.state.mouse ? '#00FFFF' : '' }}>
						{name}
					</span>
					<input className={inp === true ? 'block List-input-text' : 'none'}
					value={name}
					type="text"
					onChange={(e) => this.onTextChange(e, id)}
					onBlur={this.onChangeAll} 
					ref={this.autofocusAll}
					/>

				</label>
				<button className='List-list-button'
				 onClick={() => { this.handleDelete(id) }} 
				 style={{ display: this.state.mouse ? 'block' : '' }} >删 除</button>
			</li>
		)
	}
}