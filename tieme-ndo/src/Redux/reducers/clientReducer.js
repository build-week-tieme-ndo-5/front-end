import { FETCH_CLIENTS_START, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAIL } from '../actions/serverActions';

const initialState = {
    currentClient: {
        // key: valuePair,
        // key: valuePair
    },
    selectClient: {
        // key: valuePair,
        // key: valuePair
    },
    general: {
        clients: [],
        error: '',
        isFetching: false
    }
}

const clientReducer = ( state = initialState, action) => {

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
export default clientReducer;