import React from 'react';
import images from './img'
import './App.css';

const todos = [{todo:"create app",done:false}, {todo:'go to gym',done:false}, {todo:'buy some food',done:false}];
const colors = ['danger', 'primary', 'secondary', 'success', 'warning', 'info', 'dark'];
var uniqid = require('uniqid');

class App extends React.Component {
  state = {
    value: "",
    background: 20,
    done: true,
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
    if(this.state.background < 42){
      this.setState({background: this.state.background + 1})
    }else{
      this.setState({background: 1})
    }
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    todos.push({todo:this.state.value,done: false});
    this.setState({value: ""})
  }
  done = (e) => {
    if(todos[e].done){
      todos.map((todo, index) => index != e ? null:  todo.done == true ? todos.splice(e,1): null);
    }else{
      todos.map((todo, index) => index === e ? todo.done = true:null );
    }
    this.setState({done: !this.state.done});
  }

    render() {
        return (
          <div className = "app" style = {{background: `url(${images[this.state.background]})`, backgroundSize: 'cover'}}> 
          {/* "url(`./chan/${this.state.background}`)" */}
            <div className = 'content'>
              <h1 className="text-center">Yarik to-do</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="row mb-5">
                    <div className="col-10">
                      <input value = {this.state.value} onChange = {this.handleChange} className="form-control" placeholder = "tap your todo's"></input>
                    </div>
                    <div className="col-2">
                      <button type="submit" className="btn btn-danger">enter</button>
                    </div>
                </div>
              </form>
              {todos.map((todo, index)=> <li onClick = { () => this.done(index)} className={`list-group-item list-group-item-${colors[Math.floor(Math.random() * Math.floor(6))]} ${todo.done ? "done" : ""}`} key = {uniqid()}>{todo.todo}</li>) }
              {/* {todos.map((todo, index) => console.log(todo.todo))}
              {todos.map((todo,index) => console.log(`list-group-item list-group-item-${colors[index]}`))} */}
            </div>
        </div>
        );
    }
}

export default App;
