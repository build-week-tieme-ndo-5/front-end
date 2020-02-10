import React, { useState } from "react";
import "./App.css";
import {axiosWithAuth} from "./Utilities/axiosWithAuth";
import {ClientContext} from './contexts/ClientContext';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import PrivateRoute from "./Utilities/loginProtectedRoute";
import Login from "./Views/Login"; //not importing?
import Dashboard from "./Views/Dashboard";
import ClientList from "./Views/ClientList"; // Samuel
import ClientAdd from "./Views/ClientAdd"; // Samuel
import ClientInfo from "./Views/ClientInfo"; // Samuel

function App() {
  //to ClientAdd passed as props
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

  return (
    <ClientContext.Provider value={{clientsList, setClientsList, addClient}} >
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
            // addClient={addClient}
            // setClientsList={setClientsList}
            // clientsList={clientsList}
          />
          <Route exact path="/" />
        </Switch>
      </div>
    </ClientContext.Provider>
  );
}

export default App;