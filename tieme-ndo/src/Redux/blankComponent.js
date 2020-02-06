//mapStateToProps needs checked

import React from 'react';

import { connect } from 'react-redux';
import { getClients } from '../Redux/actions/serverActions';

const ComponentName = (props) => {
    const fetchClients = event => {
        event.preventDefault();
        props.getClients();
    }
    console.log(props);
    return (
        <>
        <h2>Clients</h2>
        <button onClick={fetchClients}>Cave Canem</button>
        <div>
            {props.clients.map( client => <XXXXXXXX/>)}
        </div>
        </>
    )
  };
  const mapStateToProps = (state) => {
    console.log(state)
    return {
      clients: state.clients,
      error: state.error,
      isFetching: state.isFetching
    }
  }
  export default connect(mapStateToProps, { getClients })(ComponentName);