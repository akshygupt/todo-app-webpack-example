import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';
import ValidatedLoginForm from './Login/LoginForm.jsx';
import TodoApp from "./Todo/TodoApp.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo App with Login
      </header>
      <section className="App-container">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route
            exact
            path="/login"
            component={ValidatedLoginForm}
          />
          <Route
            path="/todo"
            component={TodoApp}
          />
        </Switch>
      </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
