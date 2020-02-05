import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";

import { Route, Redirect } from "react-router-dom";

import ClientList from "./ClientList";
import ClientInfo from "./ClientInfo";

const Dashboard = props => {
  const [clientsList, setClientsList] = useState([]);

  //GET a list of Clients
  const getClientsList = () => {
    axiosWithAuth()
      .get(`https://tieme-ndo-5.herokuapp.com/clients`)
      .then(response => {
        console.log(response);
        setClientsList(response.data);
      })
      .catch(error => console.log("Error >", error));
  };

  useEffect(() => {
    getClientsList();
  }, []);

  //POST/create a Client
  const addClient = clients => {
    axiosWithAuth()
      .post("http://localhost:5000/clients/register", clients)
      .then(response => setClientsList(response.data))
      .catch(error => console.log("Error >", error.response));
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <Route
        exact
        path="/clients"
        render={props => <ClientInfo {...props} submitClient={addClient} />}
      />
      {clientsList.map(client => {
        return <ClientList key={client.id} client={client} />;
      })}
      <Route
        path="/clients/:id/update"
        render={props => {
          console.log(props);
          const currentClient = clientsList.find(
            client => client.id === props.match.params.id
          );
          if (!currentClient) {
            return <Redirect to="/clients" />;
          }
          return (
            <ClientInfo
              {...props}
              submitClient={addClient}
              initialValues={currentClient}
            />
          );
        }}
      />
    </div>
  );
};
export default Dashboard;
