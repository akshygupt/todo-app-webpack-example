import React from 'react';
import Todo from './Todo.jsx';


const TodoList = ({ todos, remove }) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });
    return (<div className="list" style={{ marginTop: '30px' }}>{todoNode}</div>);
}

export default TodoList;