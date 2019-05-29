import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      text: ['hello', 'there', 'my', 'name', 'is', 'Nicholas'],
      inputText: ''
    }
  }

  handleInputChange = e => {
    this.setState({ inputText: e.target.value })
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todo={this.state.text} />
        <TodoForm onHandleInputChange={this.handleInputChange} inputValue={this.state.inputText} />
      </div>
    );
  }
}

export default App;
