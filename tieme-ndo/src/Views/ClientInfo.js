import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {axiosWithAuth} from '../Utilities/axiosWithAuth';

//const [editing, setEditing] = useState(false);
//const [clientToEdit, setClientToEdit] = useState(null);

// editClient === .PUT request @ https://tieme-ndo-5.herokuapp.com/clients/${id}/update`

const ClientInfo = ({clientsList, setClientsList }) => {
    const [ client, setClient ] = useState({});
    const { id } = useParams();

	useEffect(() => {
		
		const client = clientsList.filter((client) => {
			return client.id === id;
		});
		setClient(client);
	}, [id]);

	const handleSubmit = (event) => {
        event.preventDefault();
        const id = id

		axiosWithAuth()
			.put(`https://tieme-ndo-5.herokuapp.com/clients/${id}/update`, client)
			.then((response) => {
                const updatedClient = response.data;
                // const updatedClientsList = [...clientsList, updatedClient]
                // setClientsList(updatedClientsList)
				console.log({ updatedClient });
			})
			.catch((error) => console.log('Error .PUT', error));
	};

	return (
		<div>
			<h4>ClientInfo</h4>
		</div>
	);
};
export default ClientInfo;
