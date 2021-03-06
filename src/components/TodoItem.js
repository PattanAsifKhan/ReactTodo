import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'
export class TodoItem extends Component 
{
    getStyle=()=>{
            return{
                backgroundColor:'#f4f4f4',
                padding:"10px",
                borderBottom:"1px #ccc dotted",
                textDecoration:this.props.todo.completed?'line-through':'none'
            }
        }
    render() {
        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p><input type="checkbox"onChange={this.props.markComplete.bind(this,id)}/>{title}</p>
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
            </div>
        )
    }
}
const btnStyle={
        background:"#ff0000",
        color:"#fff",
        border:'none',
        padding:"6px 10px",
        borderRadius:"50%",
        cursor:"pointer",
        float:"right"
}
export default TodoItem
