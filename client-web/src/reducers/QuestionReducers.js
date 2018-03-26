import {
    GET_ALL_QUESTIONS_STARTED,
    GET_ALL_QUESTIONS_SUCCESS,
    GET_ALL_QUESTIONS_FAILED,
    SELECT_ANSWER,
    UPDATE_QUESTION,
    ADD_QUESTION,
    DELETE_QUESTION
} from "../actions/QuestionActions";
import {SIGN_OUT} from "../actions/UserActions";

const INITIAL_STATE = {
    questions: [],
    loading: true,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS_STARTED:
            return {...state, loading: true };
        case GET_ALL_QUESTIONS_FAILED:
            return {...state, error: action.payload };
        case GET_ALL_QUESTIONS_SUCCESS:
            return {...state, questions: action.payload, loading: false };
        case UPDATE_QUESTION:
            return {...state, questions: addUpdatedQuestion(state.questions, action.payload) };
        case ADD_QUESTION:
            return {...state, questions:  [...state.questions, action.payload ] };
        case DELETE_QUESTION:
            return {...state, questions:  deleteQuestion(state.questions, action.payload) };
        case SELECT_ANSWER:
            return {...state, questions: changeSelectedAnswer(state.questions, action.payload) };
        case SIGN_OUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

function deleteQuestion(questions, delete_question){
    let newQuestions = questions.filter( el => el.id != delete_question.id);
    return newQuestions;
}

function addUpdatedQuestion (questions, new_question) {
    let newQuestions = questions.filter( el => el.id != new_question.id);
    newQuestions.push(new_question);
    return newQuestions;
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