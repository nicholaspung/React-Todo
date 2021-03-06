import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './index.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todos: []/* [{
        task: '',
        id: Date.now(),
        completed: false
      }] */,
      inputText: ''
    }
  }

  handleInputChange = e => {
    this.setState({ inputText: e.target.value })
  }

  handleSubmitForm = e => {
    e.preventDefault()

    if (this.state.inputText.length > 0) {
      this.setState({ 
        todos: [...this.state.todos, { task: this.state.inputText, id: Date.now(), completed: false } ],
        inputText: ''
      })
    }
  }

  handleMakeComplete = id => {
    // ATTEMPT at mutating state directly, rather than mapping it
    // this.setState(prevState => {
    //   const todoIndex = prevState.todos.findIndex(item => item.id === id)
    //   // console.log(prevState.todos[todoIndex].completed)

    //   return {
    //     todos: prevState.todos[todoIndex] 
    //   }
    // })
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item;
          }
        })
      }
    })
  }

  handleClearCompleted = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(item => item.completed === false )
      }
    })
  }
  
  render() {
    return (
      <div className="container">
        <div>
          <h2>Todo List: MVP</h2>
        </div>
        <div>
          <TodoList todos={this.state.todos} onHandleMakeComplete={this.handleMakeComplete} />
          <TodoForm 
            onHandleInputChange={this.handleInputChange} 
            inputValue={this.state.inputText} 
            onHandleSubmitForm={this.handleSubmitForm}
            onHandleClearCompleted={this.handleClearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
