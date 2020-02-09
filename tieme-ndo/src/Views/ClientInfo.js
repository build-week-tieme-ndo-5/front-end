import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {axiosWithAuth} from '../Utilities/axiosWithAuth';
import {useFormInput} from '../Hooks/hooks.js'
import { Button } from '@material-ui/core';

// const [editing, setEditing] = useState(false);
// const [clientToEdit, setClientToEdit] = useState(null);

// editClient === .PUT request @ https://tieme-ndo-5.herokuapp.com/clients/${id}/update`

const ClientInfo = ({clientsList, setClientsList }) => {
	const [ client, setClient ] = useState([]);
	const { id } = useParams();
    
    const history = useHistory()
	
	const name = useFormInput({placeholder:"Name", initialValue:''})
	const village = useFormInput({placeholder: "Village", initialValue: ''})
	const loanAmount = useFormInput({placeholder: "Loan Amount", initialValue: 0})

	useEffect(() => {
		
		const client = clientsList.filter((client) => {
			return client.id == id;
        });
		setClient(client[0]);
	}, [id]);
  
	
	const handleSubmit = (event) => {
        event.preventDefault();
		const newClient = {name: name.value, village: village.value, loan_amount: loanAmount.value }
		console.log(newClient)
		
		axiosWithAuth()
            .put(`https://tieme-ndo-5.herokuapp.com/clients/${id}/update`, newClient)
			.then((response) => {
				const updatedClient = response.data;
				console.log(response)
                const updatedClientsList = [...clientsList, updatedClient]
                setClientsList(updatedClientsList)
                history.push('/dashboard')
			})
			.catch((error) => console.log('Error .PUT', error));
    };
    
    if(!client.name){
        return <h1>...loading</h1>
    }

	return (
        <div>

			<h4>Edit Client</h4>
			<form onSubmit={handleSubmit} >
				<p>Name: 
				<input type='text'
                {...name}/>
            	</p>
				<p>Village: 
				<input type='text'
                {...village}/>
            	</p>
				<p>Loan Amount: 
				<input type='number'
                {...loanAmount}/>
            	</p>
				<Button onClick={e => handleSubmit(e)} variant="contained" color="primary">Update Client</Button>
			</form>
		</div>
	);
};
export default ClientInfo;