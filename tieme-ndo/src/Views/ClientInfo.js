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
    console.log(client, 'client')
    
    const history = useHistory()
	
	const name = useFormInput({placeholder:"Name", initialValue:''})

	console.log(clientsList)
	useEffect(() => {
		
		const client = clientsList.filter((client) => {
            console.log(client)
            console.log(id, 'id from params')
			return client.id == id;
        });
		setClient(client[0]);
	}, [id]);
  
	
	const handleSubmit = (event) => {
        event.preventDefault();
        const newClient = {name: name.value}
        // const id = id
         console.log(client)
		axiosWithAuth()
            .put(`https://tieme-ndo-5.herokuapp.com/clients/${id}/update`, newClient)
           
			.then((response) => {
                console.log(response)
                const updatedClient = response.data;
                const updatedClientsList = [...clientsList, updatedClient]
                setClientsList(updatedClientsList)
                console.log({ updatedClient });
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
				{/* <textarea {...name} /> */}
				<input type='text'
                {...name}/>
            </p>
				<Button onClick={e => handleSubmit(e)} variant="contained" color="primary">Update Client</Button>
			</form>
		</div>
	);
};
export default ClientInfo;


// <textarea ...name>{client.name}</textarea> 