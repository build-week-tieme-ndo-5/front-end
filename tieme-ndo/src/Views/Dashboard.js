
import React, { useEffect } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import ClientList from "./ClientList";

const Dashboard = props => {
  const {clientsList, setClientsList} = props;

  const deleteFunction = (itemId) => {
    const result = clientsList.filter(entry => entry.id !== itemId)
    setClientsList(result)
  }

  useEffect(() => {
    props.getClientsList();
  }, []);

  return (
    <div>
      <h3>Dashboard</h3>
      <Link to={'/dashboard/client-add'}><Button variant="contained" color="primary">Add Client</Button></Link>
      
      {clientsList.map(client => {
        return <ClientList key={client.id} client={client} deleteFunction={deleteFunction} />;
      })}
    </div>
  );
};
export default Dashboard;
