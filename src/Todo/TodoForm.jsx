import React from 'react';

const TodoForm = ({ addTodo }) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo(input.value);
      input.value = '';
    }}>
      <div className="field">
        <label className="label">Add Item</label>
        <div className="control">
          <input
            type="text"
            className="input"
            ref={node => {
              input = node;
            }}
          />
        </div>

      </div>

    </form>
  );
};

export default TodoForm;