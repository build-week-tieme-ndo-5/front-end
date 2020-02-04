import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";

//All Client Requester Actions
export const FETCH_CLIENTS_START = "FETCH_CLIENTS_START";
export const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
export const FETCH_CLIENTS_FAIL = "FETCH_CLIENTS_FAIL";

export const POST_CLIENT_DATA_START = "POST_CLIENT_DATA_START";
export const POST_CLIENT_DATA_SUCCESS = "POST_CLIENT_DATA_SUCCESS";
export const POST_CLIENT_DATA_FAILURE = "POST_CLIENT_DATA_FAILURE";

export const DELETE_CLIENT_DATA_START = "DELETE_CLIENT_DATA_START";
export const DELETE_CLIENT_DATA_SUCCESS = "DELETE_CLIENT_DATA_SUCCESS";
export const DELETE_CLIENT_DATA_FAILURE = "DELETE_CLIENT_DATA_FAILURE";

export const DELETE_CLIENT_ACCOUNT = "DELETE_CLIENT_ACCOUNT";

// GET a list of Clients
export const getClients = () => {
  dispatch({ type: FETCH_CLIENTS_START });

  axios
    .get(``)
    .then(response => {
      console.log(response.data.message);
      dispatch({ type: FETCH_CLIENTS_SUCCESS, payload: response.data.message });
    })
    .catch(error => {
      console.log("Error =>", error);
      dispatch({ type: FETCH_CLIENTS_FAIL, payload: error });
    });
};
