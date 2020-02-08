import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {axiosWithAuth} from '../Utilities/axiosWithAuth';
import {useFormInput} from '../Hooks/hooks.js'
import { Button } from '@material-ui/core';

// const [editing, setEditing] = useState(false);
// const [clientToEdit, setClientToEdit] = useState(null);

// editClient === .PUT request @ https://tieme-ndo-5.herokuapp.com/clients/${id}/update`

const ClientInfo = ({clientsList, setClientsList }) => {
	const [ client, setClient ] = useState([]);
	const { id } = useParams();
	console.log(id)
	
	const name = useFormInput({placeholder:"Name", initialValue:client.name })

	console.log(clientsList)
	useEffect(() => {
		
		const client = clientsList.filter((client) => {
			return client.id === id;
		});
		setClient(client);
	}, [id]);

	const handleChange = (event) => {
		event.persist()
		let value = event.target.value;

		setClient({...client, [event.target.value]: value})
	}

	const handleSubmit = (event) => {
        event.preventDefault();
        // const id = id

		axiosWithAuth()
			.put(`https://tieme-ndo-5.herokuapp.com/clients/${id}/update`, client)
			.then((response) => {
                const updatedClient = response.data;
                const updatedClientsList = [...clientsList, updatedClient]
                setClientsList(updatedClientsList)
				console.log({ updatedClient });
			})
			.catch((error) => console.log('Error .PUT', error));
	};

	return (
		<div>
			<h4>Edit Client</h4>
			<form onSubmit={handleSubmit} >
				<p>Name: 
				{/* <textarea {...name} /> */}
				<input type='text'
				{...name}
				defaultValue={client.name}
				/></p>
				<Button onClick={e => handleSubmit(e)} variant="contained" color="primary">Update Client</Button>
			</form>
		</div>
	);
};
export default ClientInfo;


// <textarea ...name>{client.name}</textarea> 