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

  //to ClientInfo passed as props
  const [editing, setEditing] = useState(false);
  const [clientToEdit, setClientToEdit] = useState(null);

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
  const editClient = (event) => {
    event.preventDefault();

    const id = clientToEdit.id;
    console.log({ clientToEdit });

    axiosWithAuth()
      .put(`https://tieme-ndo-5.herokuapp.com/clients/${id}/update`, clientToEdit)
      .then(response => {
        const updatedClient = response.data;
        console.log({updatedClient});
        const newClient = clientsList.map(currentClient => {
          console.log(currentClient);
          if(updatedClient.id === currentClient.id){
            return updatedClient
          }
          return currentClient
        });
        updatedClient(newClient)
      })
      .catch(error => console.log("Error .PUT", error))

      setEditing(false);
  }

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
          path="/dashboard/client-edit"  
          editClient={editClient}
          editing={editing}
          setEditing={setEditing}
          clientToEdit={clientToEdit}
          setClientToEdit={setClientToEdit}
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