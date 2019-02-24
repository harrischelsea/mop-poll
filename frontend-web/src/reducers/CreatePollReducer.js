import {
    CREATE_QUESTION,
    DELETE_CREATED_QUESTION,
} from "../actions/ActionTypes";
import { SIGN_OUT } from "../actions/UserActions";

const INITIAL_STATE = {
    createdQuestions: [],
    loading: false,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_QUESTION:
            return {...state, createdQuestions: [...state.createdQuestions, action.payload] };
        case DELETE_CREATED_QUESTION:
            return {...state, createdQuestions: checkQuestions(state.createdQuestions, action.payload) };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

function checkQuestions(createdQuestions, deleteIndex) {
    let newQuestions = createdQuestions.filter((el, i) => deleteIndex != i);
    return newQuestions;
}