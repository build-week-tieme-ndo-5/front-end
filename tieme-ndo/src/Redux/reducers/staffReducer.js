import { FETCH_STAFF_START, FETCH_STAFF_SUCCESS, FETCH_STAFF_FAIL } from '../actions/serverActions';

const initialState = {
    currentStaff: {
        id: '',
        username: '',                
        first_name: "",
        last_name: '',
        password: ""
    },
    selectStaff: {
        id: '',
        username: '',                
        first_name: "" 
    },
    error: '',
    isFetching: false
}

export const currentStaff = ( state = initialState.currentStaff, action) => {
    console.log(state);

    switch(action.type){
        case FETCH_STAFF_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_STAFF_SUCCESS:
            return {
                ...state,
                staff: action.payload,
                error: '',
                isFetching:false
            }
        case FETCH_STAFF_FAIL:
            return {
                ...state,
                error:'',
            }
        default:
            return state;
    }
}