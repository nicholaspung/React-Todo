import React from 'react';

import './Todo.css';

const Todo = props => {
    return (
        <li className={`${props.todoObject.completed ? 'completed' : ''}`} onClick={() => props.makeComplete(props.todoObject.id)}>{props.todoObject.task}</li>
    );
}

export default Todo;