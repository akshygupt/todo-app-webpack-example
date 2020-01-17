import React from 'react';

const Todo = ({ todo, remove }) => {
    // Each Todo
    return (<a href="#" className="list-item" onClick={() => { remove(todo.id) }}>{todo.text}</a>);
}


export default Todo;