import React from 'react';
import { axiosWithAuth } from '../Utilities/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './ClientList.scss';

function ClientList(props) {
	const { client } = props;
	const { id } = useParams();
	const history = useHistory();

	if (!props.client) {
		return <h1>Loading...</h1>;
	}
	console.log(typeof props);

	const deleteClient = () => {
		props.deleteFunction(client.id);
	};

	return (
		<tr key={client.id} className='clients-container'>
			<td> {client.name}</td>
			<td>{client.village}</td>
			<td> ${client.loan_amount}</td>
			<td>
				<Link to={`/client-list/${client.id}`}>
					<Button variant='contained' color='primary'>
						Edit
					</Button>
				</Link>
			</td>
			<td>
				<Button onClick={deleteClient} variant='contained' color='secondary'>
					Delete
				</Button>
			</td>
		</tr>
	);
}

export default ClientList;
