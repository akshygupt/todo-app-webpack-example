import React from 'react';
import loadable from "@loadable/component";
import './App.css';

import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';


const ComonentLogin = loadable(() => import('./Login/LoginForm.jsx'))
const ComonentTodoApp = loadable(() => import('./Todo/Todo.jsx'))


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
                render={() => <ComonentLogin />}
              />
              <Route
                path="/todo"
                render={() => <ComonentTodoApp />}
              />
            </Switch>
          </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
