import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos.js'
import Header from './components/layout/Header'
import AddtoList from './components/AddtoList'
import About from './components/pages/About'
import {v4 as uuid} from 'uuid'

class App extends Component {
  state={
    todos:[]
  }
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id==id){
        todo.completed=!todo.completed
      }
      return todo
    })})
  }
  delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>
      todo.id!==id)]})
  }
  AddtoList=(title)=>{
    const newTodo={
      id:uuid(),
      title,
      completed:false

    }
    this.setState({todos:[...this.state.todos,newTodo]})
  }
  render(){
  return (
    <Router>
    <div className="App">
          <Header/>
          <Route exact path="/" render={props=> (
            <React.Fragment>
              <AddtoList AddtoList={this.AddtoList}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}/>

            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
    </div>
    </Router>
  );
  }
}

export default App;
