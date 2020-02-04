import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

import { Route, Redirect } from "react-router-dom";

// import ClientCard from './'
// import ClientForm from './'

const Dashboard = () => {
  const [clientsList, setClientsList] = useState([]);

  //GET a list of Clients
  const getClientsList = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/clients`)
      .then(response => {
        console.log(response);
        setClientsList(response.data);
      })
      .catch(error => console.log("Error >", error));
  };

  useEffect(() => {
    getClientsList();
  }, []);

  const addClient = clients => {
      axiosWithAuth()
        .post(`http://localhost:5000/clients/register`, clients);
        .then(response => setClientsList(response.data)):
        .catch(error => console.log("Error >", error.response));
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <Route
        exact
        path="/clients"
        render={props => <ClientForm {...props} submitClient={addClient} />}
      />
      {clientsList.map(client => {
        return <ClientCard key={client.id} client={client} />;
      })}
      <Route
        path="/friends/edit/:id"
        render={props => {
          console.log(props);
          const currentClient = clientsList.find(
            client => client.id === props.match.params.id
          );
          if (!currentClient) {
            return <Redirect to="/clients" />;
          }
          return (
            <ClientForm
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
