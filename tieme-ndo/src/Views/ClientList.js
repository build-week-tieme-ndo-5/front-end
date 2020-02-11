import React from "react";
import { axiosWithAuth } from '../Utilities/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

function ClientList(props) {
  const {client} = props
  const { id }  = useParams();
  const history = useHistory()

  if(!props.client){
    return (<h1>Loading...</h1>)
  }
  console.log(typeof props)

  const deleteClient = () => {
    props.deleteFunction(client.id)
  }
  
  return (
    <div>
      
        <div key={client.id}>
          <p>Client Name: {client.name}</p>
          <p>Village Name:{client.village}</p>
          <p>Loan Amount: ${client.loan_amount}</p>
        </div>
        <Link to={`/client-list/${client.id}`}><Button variant="contained" color="primary">Edit</Button></Link>
        <Button onClick={deleteClient} variant="contained" color="secondary">Delete</Button>
    </div>
  );
}


export default ClientList;