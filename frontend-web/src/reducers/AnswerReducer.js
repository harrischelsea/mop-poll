import {
    SET_ANSWER,
    SEND_POLL_ANSWERS_FAILED,
    SEND_POLL_ANSWERS_STARTED,
    SEND_POLL_ANSWERS_SUCCESS
} from "../actions/ActionTypes";
import { SIGN_OUT } from "../actions/UserActions";

const INITIAL_STATE = {
    answers: [],
    loading: false,
    error: '',
    success: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ANSWER:
            return {...state, answers: handleAnswers(state.answers, action.payload) };
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

function handleAnswers(answers, newAnswer) {
    let find = answers.find(el => el.option_id === newAnswer.option_id);
    if (!find) {
        let checkType = answers.find(el => 
            el.type_id && el.question_id &&
            el.question_id === newAnswer.question_id &&
            el.type_id === newAnswer.type_id);
        if (checkType && (checkType.type_id === 1 || checkType.type_id === 2)){
            let index = answers.findIndex(el => el.option_id === checkType.option_id);
            answers.splice(index, 1, newAnswer);
        } else {
            answers.push(newAnswer)
        }
    } else {
        let index = answers.findIndex(el => el.option_id === newAnswer.option_id);
        answers.splice(index, 1);
    }

    return answers;
}