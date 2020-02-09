import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';
import {useFormInput} from '../Hooks/hooks.js'

const newClient = {
  name: "", // string - required
  village: "", // string - required
  loan_amount: "", // float - required
  loan_start: "", // date - required - enter as string in YYYY-MM-DD format
  loan_due: "", // date - required - enter as string in YYYY-MM-DD format
  last_payment: "", // float - optional
  payment_date: "", // date - optional - enter as string in YYYY-MM-DD format
  harvest_yield: "", // integer - optional
  sales_goal: "" // integer - optional
};

const ClientAdd = props => {
  const {clientsList, setClientsList, addClient} = props;

  const history = useHistory();

  const name = useFormInput({placeholder:"Name", initialValue:"" })
  const village = useFormInput({placeholder:"Village", initialValue:""})
  const loan_amount= useFormInput({placeholder:"Loan Amount", initialValue:""});
  const loan_start = useFormInput({placeholder:"Loan Start", initialValue:""});
  const loan_due = useFormInput({placeholder: "Loan Due", initialValue:""});
  const payment = useFormInput({placeholder: "Payment", initialValue:""});
  const payment_date = useFormInput({placeholder:"Payment Date", initialValue:""});
  const last_payment = useFormInput({placeholder: "Last Payment", initialValue:""});
  const harvest_yield = useFormInput({placeholder:"Harvest Yield", initialValue:""});
  const sales_goal = useFormInput({placeholder: "Sales Goal", initialValue:""})
  console.log(loan_start, 'loan start')
   const newClient = {
    name: name.value, village: village.value, loan_amount: parseInt(loan_amount.value), loan_start: loan_start.value, loan_due: loan_due.value,  payment: payment.value, payment_date: payment_date.value,last_payment:  last_payment.value, harvest_yield: harvest_yield.value, sales_goal: sales_goal.value
  }

  console.log(newClient)

//   const [createClient, setCreateClient] = useState(newClient);
//     console.log(createClient)
    
//   const handleChange = event => {
//     setCreateClient({
//       ...createClient,
//       [event.target.name]: event.target.value
//     });
//   };

  const handleSubmit = event => {
    event.preventDefault();
    const clientToBeAdded = newClient
    addClient(clientToBeAdded);
    const newList = [...clientsList, clientToBeAdded];
    setClientsList(newList);
    history.push('/dashboard');
  };

  return (
    <div>
      <h3>Client Add</h3>
      <form onSubmit={handleSubmit}>
        <p>Name: 
        <input 
          type="text"
           {...name}
        /></p>
        <p>Village: <input 
            
           {...village}
        /></p>
        <p>Loan Amount: <input 
            
            {...loan_amount}
        /></p>
        <p>Loan Start: <input 
            
            {...loan_start}
        /></p>
        <p>Loan Due: <input 
            
            {...loan_due}
        /></p>
        <p>Last Payment: <input 
            
            {...last_payment}
        /></p>
        <p>Payment Date: <input 
            
            {...payment_date}
        /></p>
        <p>Harvest Yield: <input 
          
            {...harvest_yield}
        /></p>
        <p>Sales Goal: <input 
            
            {...sales_goal}
        /></p>
        <Button onClick={e => handleSubmit(e)} variant="contained" color="primary">Add Client</Button>
      </form>
    </div>
  );
};

export default ClientAdd;
