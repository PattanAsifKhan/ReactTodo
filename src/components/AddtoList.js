import React, { Component } from 'react'

export class AddtoList extends Component {
    state={
        title:''
    }
    onChange=(e)=>this.setState({title:e.target.value})
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.AddtoList(this.state.title);
        this.setState({title:''})



    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex', padding:"20px"}}>
                <input type="text" name="title"style={{flex:'10',padding:"10px"}} onChange={this.onChange} value={this.state.title}placeholder="Add Todo"/>
                <input type="submit" value="Submit" classsName="btn" style={{flex:'1',padding:"10px"}}/>
            </form>
        )
    }
}

export default AddtoList
