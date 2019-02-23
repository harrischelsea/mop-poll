import axios from 'axios';

export const GET_ALL_QUESTIONS_STARTED = "GET_ALL_QUESTIONS_STARTED";
export const GET_ALL_QUESTIONS_SUCCESS = "GET_ALL_QUESTIONS_SUCCESS";
export const GET_ALL_QUESTIONS_FAILED = "GET_ALL_QUESTIONS_FAILED";
export const SELECT_ANSWER = "SELECT_ANSWER";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";

export const getAllQuestionsStarted = () => {
    return ({
        type: GET_ALL_QUESTIONS_STARTED
    });
};

export const getAllQuestionsSuccess = (questions) => {
    return ({
        type: GET_ALL_QUESTIONS_SUCCESS,
        payload: questions
    });
};

export const getAllQuestionsFailed = (error) => {
    return ({
        type: GET_ALL_QUESTIONS_FAILED,
        payload: error
    });
};

export const updateQuestion = (question) => {
    return ({
        type: UPDATE_QUESTION,
        payload: question
    });
};

export const addNewQuestion = (question) => {
    return ({
        type: ADD_QUESTION,
        payload: question
    });
};

export const deleteQuestion = (question) => {
    return ({
        type: DELETE_QUESTION,
        payload: question
    });
};

export const selectAnswer = (question_id, option_id, type_id, checked, textAnswer) => {
    return ({
        type: SELECT_ANSWER,
        payload: {question_id, option_id, type_id, checked, textAnswer}
    });
};

export  const getAllQuestions = (pollId) => dispatch => {
    console.log('getAllQuestionsgetAllQuestions');
    dispatch(getAllQuestionsStarted());
    axios.get('/users/get-all-questions/' + pollId)
        .then(res => {
            dispatch(getAllQuestionsSuccess(res.data));
        })
        .catch( () => dispatch(getAllQuestionsFailed('Something went wrong!')));
};