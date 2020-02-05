import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function ClientList(props) {
  console.log(props);
  const {client} = props

  if(!props.client){
    return (<h1>Loading...</h1>)
  }
  return (
    <div>
      
        <div key={client.id}>
          <Link to={`/client-list/${client.id}`}>
            <p>Client Name: {client.name}</p>
          </Link>
          <p>Village Name:{client.village}</p>
          <p>Loan Amount: ${client.loan_amount}</p>
        </div>
        <Link to={`/client-list/${client.id}`}><Button variant="contained" color="primary">Edit</Button></Link>
    </div>
  );
}


export default ClientList;