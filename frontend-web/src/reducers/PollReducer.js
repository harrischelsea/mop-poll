import {
    GET_ALL_POLLS_SUCCESS,
    GET_ALL_POLLS_STARTED,
    GET_ALL_POLLS_FAILED
} from "../actions/ActionTypes";
import { SIGN_OUT } from "../actions/UserActions";

const INITIAL_STATE = {
    polls: [],
    loading: false,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_POLLS_STARTED:
            return {...state, loading: true };
       case GET_ALL_POLLS_FAILED:
            return {...state, error: action.payload, loading: false };
        case GET_ALL_POLLS_SUCCESS:
            return {...state, polls: action.payload, loading: false };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}