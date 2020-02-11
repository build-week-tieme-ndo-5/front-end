import React, { useState } from "react";
import "./App.css";
import {axiosWithAuth} from "./Utilities/axiosWithAuth";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import PrivateRoute from "./Utilities/loginProtectedRoute";
import Login from "./Views/Login"; //not importing?
import Dashboard from './Views/Dashboard';
import ClientList from './Views/ClientList'; // Samuel
// import ClientAdd from './Views/ClientAdd'; // Samuel
import ClientInfo from './Views/ClientInfo'; // Samuel
import NavigationBar from './Components/NavigationBar';
import { createMuiTheme } from '@material-ui/core/styles';

function App() {
  const theme = createMuiTheme({palette:{
    common:{
        black:"#000",
        white:"#fff"},
    background:{
        paper:"rgba(210, 152, 106, 1)",
        default:"rgba(206, 208, 158, 1)"},
    primary:{
        light:"rgba(112, 137, 120, 1)",
        main:"rgba(47, 59, 51, 1)",
        dark:"rgba(21, 53, 32, 1)",
        contrastText:"#fff"},
    secondary:{
        light:"rgba(235, 198, 157, 1)",
        main:"rgba(223, 165, 98, 1)",
        dark:"rgba(194, 145, 89, 1)",
        contrastText:"rgba(0, 0, 0, 1)"},
    error:{
        light:"#e57373",
        main:"#f44336",
        dark:"#d32f2f",
        contrastText:"#fff"},
    text:{
        primary:"rgba(0, 0, 0, 0.87)",
        secondary:"rgba(0, 0, 0, 0.54)",
        disabled:"rgba(0, 0, 0, 0.38)",
        hint:"rgba(0, 0, 0, 0.38)"}}});
  return (
    <Router>
      <div className="App">
        <nav>
          <NavigationBar />
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="dashboard/client-list" component={ClientList} />
          <PrivateRoute path="dashboard/client-edit" component={ClientInfo} />
          {/* <PrivateRoute path="dashboard/client-add" component={ClientAdd} /> */}
          <Route exact path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
