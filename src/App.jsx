import React, {useState} from 'react';
import loadable from "@loadable/component";
import './App.css';

import { BrowserRouter, Router, Switch, Redirect, Route } from 'react-router-dom';

const ComonentLogin = loadable(() => import('./Login/LoginForm.jsx'));
const Footer = loadable(() => import('./Footer.jsx'));

const ComonentTodoApp = loadable(
    () => import('./Todo/TodoApp.jsx').then(module => ({ default: module.TodoApp }))
);

// with default component
// const ComonentLogin = loadable(() => import(/* webpackChunkName: "loginform", webpackPrefetch: true */ './Login/LoginForm.jsx'));
// const Footer = loadable(() => import(/* webpackChunkName: "footer", webpackPrefetch: true */'./Footer.jsx'));

// // without default component
// const ComonentTodoApp = loadable(
//     () => import(/* webpackChunkName: "todoapp", webpackPrefetch: true */'./Todo/TodoApp.jsx').then(module => ({ default: module.TodoApp }))
// );
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
    </div>
  );
}

export default App;
