import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input type="text" placeholder="....todo" onChange={props.onHandleInputChange} value={props.inputValue}></input>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    );
}

export default TodoForm;