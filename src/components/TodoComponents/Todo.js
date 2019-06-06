import React from 'react';

import './Todo.css';

const Todo = props => {
    return (
        <p className={`${props.todoObject.completed ? 'completed' : ''}`} onClick={() => props.makeComplete(props.todoObject.id)}>{props.todoObject.task}</p>
    );
}

export default Todo;