import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';
import ValidatedLoginForm from './Login/LoginForm.jsx';
import TodoApp from "./Todo/TodoApp.jsx";
import { isAuthenticated } from './utils/authentication';

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
            render={(props) => isAuthenticated() ? <Redirect to="/todo" /> : <ValidatedLoginForm {...props}/>}
          />
          <Route
            path="/todo"
            render={(props) => !isAuthenticated() ? <Redirect to="/login" /> : <TodoApp {...props}/>}
          />
        </Switch>
      </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
