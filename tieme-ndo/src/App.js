import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import PrivateRoute from "./Utilities/loginProtectedRoute";
import SignIn from "./Components/LoginForm";
import Login from './Views/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            {/* <SignIn /> */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" />
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
