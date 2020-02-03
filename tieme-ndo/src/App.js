import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import PrivateRoute from "./Utilities/loginProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
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
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="dashboard/client-list" component={ClientList} />
          <PrivateRoute path="dashboard/client-edit" component={ClientInfo} />
          <PrivateRoute path="dashboard/client-add" component={ClientAdd} />
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
