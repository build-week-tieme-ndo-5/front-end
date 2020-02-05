import { FETCH_CLIENTS_START, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAIL } from '../actions/serverActions';

const initialState = {
    createClient: { //to CREATE a new Client?
    id: '',                
    name: "",
    village: '',
    loan_amount: "",
    loan_start: "",
    loan_due: "",
    last_payment: "",
    payment_date: "",
    harvest_yield: "",
    sales_goal: ""
    },
    selectClient: {
        id: '',
        name: '',                
        loan_due: "" 
    }
    // error: ''
    // isFetching: false
}

const createClient = ( state = initialState.createClient, action) => {
    console.log(state);

    switch(action.type){
        case FETCH_CLIENTS_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_CLIENTS_SUCCESS:
            return {
                ...state,
                clients: action.payload,
                error: '',
                isFetching:false
            }
        case FETCH_CLIENTS_FAIL:
            return {
                ...state,
                error:'',
            }
        default:
            return state;
    }
}
export default createClient;