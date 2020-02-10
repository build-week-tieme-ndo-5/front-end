
import React, { useEffect } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import ClientList from "./ClientList";
import './ClientList.scss'

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
    <div className="dashboard-wrapper">
    <div className="dash-header">
      <h3>Dashboard</h3>
      <Link to={'/dashboard/client-add'}><Button variant="contained" color="primary">Add Client</Button></Link>
     </div> 
    
     <table>
      <tr>
        <th>Client Name</th>
        <th>Village Name</th>
        <th>Loan Amount</th>
        <th>Edit Client</th>
        <th>Delete</th>
      </tr>
      {clientsList.map(client => {
        return <ClientList key={client.id} client={client} deleteFunction={deleteFunction} />;
      })}
      </table>
    </div>
  );
};
export default Dashboard;
