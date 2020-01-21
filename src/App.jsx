import React, {useState} from 'react';
import loadable from "@loadable/component";
// import 'bulma/css/bulma.min.css';
import './App.css';
import { square } from './mathUtility';

import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

// with default component
const ComonentLogin = loadable(() => import(/* webpackChunkName: "loginform", webpackPrefetch: true */ './Login/LoginForm.jsx'));
const Footer = loadable(() => import(/* webpackChunkName: "footer", webpackPrefetch: true */'./Footer.jsx'));

// without default component
const ComonentTodoApp = loadable(
    () => import(/* webpackChunkName: "todoapp", webpackPrefetch: true */'./Todo/TodoApp.jsx').then(module => ({ default: module.TodoApp }))
);
// https://loadable-components.com/docs/getting-started/


function App() {
  const [showFooter, setShowFooter] = useState(false);

  const loadFooter = () => setShowFooter(true);

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
      <button onClick={loadFooter} variant="primary" className="mb-4">Load Footer</button>
    {showFooter && (
        <Footer />
    )}
    <h2>Tree shaking example {square(5)}</h2>
    </div>
  );
}

export default App;
