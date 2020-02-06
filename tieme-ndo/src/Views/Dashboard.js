
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import PrivateRoute from '../Utilities/loginProtectedRoute.js'
import ClientList from "./ClientList";
import ClientInfo from "./ClientInfo";
import ClientAdd from './ClientAdd';

const Dashboard = props => {
  const {clientsList, setClientsList} = props;

  //GET a list of Clients
  const getClientsList = () => {
    axiosWithAuth()
      .get(`https://tieme-ndo-5.herokuapp.com/clients`)
      .then(response => {
        console.log("GET >", response);
        setClientsList(response.data);
      })
      .catch(error => console.log("Error >", error));
  };

  useEffect(() => {
    getClientsList();
  }, []);

  //POST/create a Client
 

  return (
    <div>
      
     
      <h3>Dashboard</h3>
      <Link to={'/dashboard/client-add'}><Button variant="contained" color="primary">Add Client</Button></Link>
      
       
      

      {clientsList.map(client => {
        return <ClientList key={client.id} client={client} />;
      })}
      {/* <Route
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
            <ClientAdd
              {...props}
              submitClient={addClient}
              initialValues={currentClient}
            />
          );
        }}
      /> */}
    </div>
  );
};
export default Dashboard;
