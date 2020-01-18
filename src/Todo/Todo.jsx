import React from 'react';

const Todo = ({ todo, remove }) => {
    // Each Todo
    return todo ? (<a href="#" className="list-item" onClick={() => { remove(todo.id) }}>{todo.text}</a>) : null;
}


export default Todo;