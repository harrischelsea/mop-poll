import {
    GET_ALL_QUESTIONS_FAILED,
    GET_ALL_QUESTIONS_STARTED,
    GET_ALL_QUESTIONS_SUCCESS,
    UPDATE_QUESTION, REMOVE_QUESTION,
    ADD_NEW_QUESTION
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
        case UPDATE_QUESTION:
            return {...state, questions: changeQuestion(state.questions, action.payload) };
        case REMOVE_QUESTION:
            return {...state, questions: removeQuestion(state.questions, action.payload) };
        case ADD_NEW_QUESTION:
            return {...state, questions: [
                ...state.questions,
                {text: action.payload.name, tip: action.payload.selectedType, opcije: action.payload.options }
                ] 
            };;
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

function changeQuestion(questions, updatedQuestion) {
    let findIndex = questions.findIndex(el => el.id == updatedQuestion.questionId);
    questions[findIndex] = {...questions[findIndex], text: updatedQuestion.questionText}
    return questions;
}

function removeQuestion(questions, deleteQuestion) {
    let newQuestions = questions.filter(el => el.id != deleteQuestion.questionId);
    return newQuestions;
}