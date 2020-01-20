import React from 'react';

import Title from './Title.jsx';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';
import { isAuthenticated } from '../utils/authentication.js';

// Contaner Component
// Todo Id
window.id = 0;
export default class TodoApp extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = 'https://5e219b256867a0001416f57a.mockapi.io/api/todos';
  }
  // Lifecycle method
  componentDidMount() {
    if(isAuthenticated()) {
      fetch(this.apiUrl)
      .then(res => res.json())
      .then((res) => {
        // Set state with result
        this.setState({ data: res });
      });
    }
    else {
      this.props.history.push('/login');
    }
   
  }
  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { text: val }
    // Update data
    fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then((res) => {
        this.state.data.push(res);
        this.setState({ data: this.state.data });
      });
  }
  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    // Update state with filter
    fetch(this.apiUrl + '/' + id, { method: 'DELETE' })
      .then(res => res.json())
      .then((res) => {
        this.setState({ data: remainder });
      })
  }

  render() {
    // Render JSX
    return (
      <div>
        <Title todoCount={this.state.data.length} />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}