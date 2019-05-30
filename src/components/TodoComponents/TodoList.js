// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(todoItem => <Todo todoObject={todoItem} makeComplete={props.onHandleMakeComplete} key={todoItem.id}/>)}
        </ul>
    );
}

export default TodoList;