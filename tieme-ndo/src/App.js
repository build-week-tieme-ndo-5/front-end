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
import Dashboard from "./Views/Dashboard";
import ClientList from "./Views/ClientList"; // Samuel
import ClientAdd from "./Views/ClientAdd"; // Samuel
import ClientInfo from "./Views/ClientInfo"; // Samuel

function App() {
  //to ClientAdd passed as props
  const [clientsList, setClientsList] = useState([]);

  //to ClientAdd passed as props
  const addClient = clients => {
      console.log('add client is running')
      console.log(clients, 'clients from add client')
    axiosWithAuth()
      .post(`https://tieme-ndo-5.herokuapp.com/clients/register`, clients)
      .then(response => setClientsList(response.data))
      .catch(error => console.log("Error >", error.response));
  };
//to ClientInfo passed as props
  

  return (
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
          clientsList={clientsList}
          setClientsList={setClientsList}
        />
        <PrivateRoute component={ClientList} path="/dashboard/client-list"  />
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
  );
}

export default App;