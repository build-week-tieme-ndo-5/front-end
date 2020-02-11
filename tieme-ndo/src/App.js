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
import ClientAdd from './Views/ClientAdd'; // Samuel
import ClientInfo from './Views/ClientInfo'; // Samuel
import NavigationBar from './Components/NavigationBar';
import { createMuiTheme } from '@material-ui/core/styles';

function App() {

     const [clientsList, setClientsList] = useState([]);

  //to ClientAdd passed as props
  const addClient = clients => {
    axiosWithAuth()
      .post(`https://tieme-ndo-5.herokuapp.com/clients/register`, clients)
      .then(response => {
        getClientsList()
      })
      .catch(error => console.log("Error >", error.response));
      
  };

  //GET a list of Clients
  const getClientsList = () => {
    axiosWithAuth()
      .get(`https://tieme-ndo-5.herokuapp.com/clients`)
      .then(response => {
        setClientsList(response.data);
      })
      .catch(error => console.log("Error >", error));
  };
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
         <NavigationBar/>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
          getClientsList={getClientsList}
          clientsList={clientsList}
          setClientsList={setClientsList}
        />
        <PrivateRoute 
          component={ClientList}
          path="/dashboard/client-list"  
          setClientsList={setClientsList}
          clientsList={clientsList}
          />
        <PrivateRoute 
          component={ClientInfo} 
          path="/client-list/:id"  
          clientsList={clientsList}
          setClientsList={setClientsList}
        />
        <PrivateRoute
          component={ClientAdd}
          path="/dashboard/client-add"
          addClient={addClient}
          setClientsList={setClientsList}
          clientsList={clientsList}
        />
        <Route exact path="/" />
      </Switch>
    </div>

    </Router>
  );
}

export default App;
