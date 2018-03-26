import {
    SEND_POLL_ANSWERS_SUCCESS,
    SEND_POLL_ANSWERS_FAILED,
    SEND_POLL_ANSWERS_STARTED
} from "../actions/SendPollAnswersActions";
import {SIGN_OUT} from "../actions/UserActions";

const INITIAL_STATE = {
    loading: false,
    error: '',
    success: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEND_POLL_ANSWERS_STARTED:
            return {...state, loading: true };
        case SEND_POLL_ANSWERS_FAILED:
            return {...state, error: action.payload, loading: false };
        case SEND_POLL_ANSWERS_SUCCESS:
            return {...state, success: true, loading: false };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}