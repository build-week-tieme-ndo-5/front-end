import axios from "axios";

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

// .GET > client data requested from Server
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

// .POST > client data pushed to Server from Login Form
export const postClientRequester = () => dispatch => {
  dispatch({type: POST_CLIENT_DATA_START});
  axiosWithAuth()
      .post("")
      .then((response) => {
          dispatch({type:POST_CLIENT_DATA_SUCCESS, payload: response.data});
      })
      .catch((error)=>{
          dispatch({type:POST_CLIENT_DATA_FAILURE, payload: `${error.response}`});
      })
}

// .DELETE > client account ?
export const deleteClient = () => {
  dispatch({ type: DELETE_CLIENT_ACCOUNT });
  axiosWithAuth()
    .delete('')
    then((response) => {
      dispatch({ type: DELETE_CLIENT_DATA_SUCCESS, payload: response.data })
    })
    .catch((error) => {
      dispatch({ type: DELETE_CLIENT_DATA_FAILURE, payload: `${error.response}` })
    })

}