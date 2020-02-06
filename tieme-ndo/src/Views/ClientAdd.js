import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";

import { Button } from '@material-ui/core';

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
  console.log(props);

  const [createClient, setCreateClient] = useState(newClient);
    console.log(createClient)
    
  const handleChange = event => {
    setCreateClient({
      ...createClient,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addClient(createClient);
  };

  return (
    <div>
      <h3>Client Add</h3>
      <form onSubmit={handleSubmit}>
        <p>Name: <input 
            type="text"
            placeholder="Name"
            name="name"
            value={createClient.name}
            onChange={handleChange}
        /></p>
        <p>Village: <input 
            type="text"
            placeholder="Village"
            name="village"
            value={createClient.village}
            onChange={handleChange}
        /></p>
        <p>Loan Amount: <input 
            type="text"
            placeholder="Loan Amount"
            name="loan amount"
            value={createClient.loan_amount}
            onChange={handleChange}
        /></p>
        <p>Loan Start: <input 
            type="text"
            placeholder="Loan start"
            name="loan start"
            value={createClient.loan_start}
            onChange={handleChange}
        /></p>
        <p>Loan Due: <input 
            type="text"
            placeholder="Loan due"
            name="loan due"
            value={createClient.loan_due}
            onChange={handleChange}
        /></p>
        <p>Last Payment: <input 
            type="text"
            placeholder="Last Payment"
            name="last payment"
            value={createClient.loan_due}
            onChange={handleChange}
        /></p>
        <p>Payment Date: <input 
            type="text"
            placeholder="Payment Date"
            name="payment date"
            value={createClient.payment_date}
            onChange={handleChange}
        /></p>
        <p>Harvest Yield: <input 
            type="text"
            placeholder="Harvest Yield"
            name="harvest yield"
            value={createClient.harvest_yield}
            onChange={handleChange}
        /></p>
        <p>Sales Goal: <input 
            type="text"
            placeholder="Sales Goal"
            name="Sales Goal"
            value={createClient.sales_goal}
            onChange={handleChange}
        /></p>
        <Button variant="contained" color="primary">Add Client</Button>
      </form>
    </div>
  );
};

export default ClientAdd;
