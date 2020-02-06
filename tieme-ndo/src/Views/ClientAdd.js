import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utilities/axiosWithAuth";

const newClient = {
    name: "",                  // string - required
    village: "",          // string - required
    loan_amount: "",            // float - required
    loan_start: "",   // date - required - enter as string in YYYY-MM-DD format
    loan_due: "",     // date - required - enter as string in YYYY-MM-DD format
    last_payment: "",          // float - optional
    payment_date: "", // date - optional - enter as string in YYYY-MM-DD format
    harvest_yield: "",           // integer - optional
    sales_goal: ""               // integer - optional
}

const ClientAdd = (props) => {
  console.log(props);

  return (
    <div>
      <h3>Client Add</h3>
    </div>
  );
};

export default ClientAdd;
