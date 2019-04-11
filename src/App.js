import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import banner from './assests/images/banner.png';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import TodoAdding from './components/TodoAdding';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props){
    super(props);

    const { cookies } = props;
    this.state = {
      todods:cookies.get('tasks')?cookies.get('tasks'):[],
      todoContent:""
    };
  }

  changeTodoContent = (event) =>{
    const content = event.target.value;
    this.setState({
      todoContent: content
    });
  }

  addTodo = (todoContent)=>{
    const { cookies } = this.props;
    
    const todos = [...this.state.todods];
    if(this.state.todoContent){
      console.log(cookies.get('tasks'));
      todos.unshift({content:todoContent, isCompleted:false});
      const tasksList=JSON.stringify(todos);
        cookies.set('tasks',tasksList);
      //console.log( stringArr);
      this.setState({
        todods: todos,
        todoContent: ""
      });
    }
  }

  keyPressed(event){
    if(event.key==='Enter'){
      this.addTodo(this.state.todoContent);
    }
  }

  deleteTask(event, index){
    const { cookies } = this.props;
    const todos =[...this.state.todods];
    todos.splice(index, 1);

    const tasksList=JSON.stringify(todos);
    cookies.set('tasks',tasksList);

    this.setState({
      todods: todos
    });
  }

  render() {
    let myTodos = [
      {
        "id": 1,
        "content":"aaaa",
        "isCompleted": true
      }, {
        "id": 2,
        "content":"bbbb",
        "isCompleted": false
      }, {
        "id": 3,
        "content":"cccc",
        "isCompleted": false
      }];
    // let myTodoList = myTodos.map((t, index) => {
    //   return(
    //     <TodoItem content={t.content} key={t.id} />
    //   );
    // });
    let myTodoList = this.state.todods.map((t, index) => {
      return(
        <TodoItem content={t.content} key={t.id} delete={(event) => {this.deleteTask(event, index)}} />
      );
    });
    return (
      <div className="App">
        <img src={banner} className="banner"></img>
        <TodoAdding 
          change={(event)=>{this.changeTodoContent(event)}} 
          todoContent={this.state.todoContent} 
          click={(event)=>{this.addTodo(this.state.todoContent)}}
          enterPressed={(event)=>this.keyPressed(event)}/>
        <ul>
          {myTodoList}
        </ul>
      </div>
    );
  }
}

export default withCookies(App);
