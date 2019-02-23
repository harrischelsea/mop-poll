import {
    GET_ALL_QUESTIONS_FAILED,
    GET_ALL_QUESTIONS_STARTED,
    GET_ALL_QUESTIONS_SUCCESS
} from "../actions/ActionTypes";
import { SIGN_OUT } from "../actions/UserActions";

const INITIAL_STATE = {
    questions: [],
    loading: false,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS_STARTED:
            return {...state, loading: true };
       case GET_ALL_QUESTIONS_FAILED:
            return {...state, error: action.payload, loading: false };
        case GET_ALL_QUESTIONS_SUCCESS:
            return {...state, questions: action.payload, loading: false };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}