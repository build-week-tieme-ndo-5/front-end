import React from "react";
import { Link } from "react-router-dom";

function ClientList(props) {
  console.log(props);
  return (
    <div>
      {props.clients.map(client => (
        <div key={client.id}>
          <Link to={`/client-list/${client.id}`}>
            <p>{client.name}</p>
          </Link>
          <p>${client.village}</p>
          <p>${client.loan_ammount}</p>
        </div>
      ))}
    </div>
  );
}

export default ClientList;
