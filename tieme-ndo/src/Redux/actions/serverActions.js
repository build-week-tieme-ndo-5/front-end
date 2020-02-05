import axios from "axios";
import { dispatch } from "rxjs/internal/observable/pairs";

export const FETCH_CLIENTS_START = "FETCH_DOGS_START";
export const FETCH_CLIENTS_SUCCESS = "FETCH_DOGS_SUCCESS";
export const FETCH_CLIENTS_FAIL = "FETCH_DOGS_FAIL";

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
