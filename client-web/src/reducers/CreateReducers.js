import {
    ADD_OPTION,
    ADD_OPTION_FAILED,
    ADD_OPTION_SUCCESS,
    ADD_QUESTION_FAILED,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION
} from "../actions/CreateActions";
import {SIGN_OUT} from "../actions/UserActions";

const INITIAL_STATE = {
    questions: [],
    loading: true,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_QUESTION_SUCCESS:
            return {...state, loading: false };
        case ADD_QUESTION_FAILED:
            return {...state, error: 'Error!' };
        case ADD_OPTION_SUCCESS:
            return {...state, loading: false };
        case ADD_OPTION_FAILED:
            return {...state, error: 'Error!' };
        case ADD_QUESTION:
            return {...state, questions: changeSelectedAnswer(state.questions, action.payload) };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

function changeSelectedAnswer(questions, {question_id, option_id, type_id, checked, textAnswer}) {
    console.log(arguments[1]);
    console.log(questions, question_id, option_id, type_id);
    const selectedQuestion = questions.find( q => q.id == question_id);
    let newOptions;
    if (type_id == 1 || type_id == 2) {
        newOptions = selectedQuestion.opcije.map( el => {
            return el.id == option_id ? {...el, selected: true} : {...el, selected: false}
        });
    } else if (type_id == 3) {
        newOptions = selectedQuestion.opcije.map( el => {
            return el.id == option_id ? {...el, selected: !checked} : el
        });
    } else if (type_id == 4) {
        newOptions = selectedQuestion.opcije.map( el => {
            return el.id == option_id ? {...el, text: textAnswer, selected: true} : el
        });
    }
    else {
        newOptions = selectedQuestion.opcije;
    }

    const newQuestion = {...selectedQuestion, opcije: newOptions};
    const newQuestions = questions.map( q => {
        if (q.id == question_id) {
            return newQuestion;
        } else {
            return q;
        }
    });

    return newQuestions;
}