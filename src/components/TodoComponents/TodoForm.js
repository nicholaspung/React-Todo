import React from 'react';

const TodoForm = props => {
    return (
        <form >
            <input type="text" placeholder="....todo" onChange={props.onHandleInputChange} value={props.inputValue}></input>
            <button onClick={props.onHandleSubmitForm}>Add Todo</button>
            <div>
                <button onClick={props.onHandleClearCompleted}>Clear Completed</button>
            </div>
        </form>
    );
}

export default TodoForm;