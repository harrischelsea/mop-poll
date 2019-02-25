import axios from 'axios';
import { Services } from '../services/Services';
import {
    GET_ALL_QUESTIONS_FAILED, GET_ALL_QUESTIONS_STARTED, GET_ALL_QUESTIONS_SUCCESS,
    ADD_QUESTION_OPTION, REMOVE_QUESTION_OPTION,
    UPDATE_QUESTION, REMOVE_QUESTION,
    ADD_NEW_QUESTION
} from './ActionTypes';

const getAllQuestionsStarted = () => {
    return ({
        type: GET_ALL_QUESTIONS_STARTED
    });
};

const getAllQuestionsSuccess = (polls) => {
    return ({
        type: GET_ALL_QUESTIONS_SUCCESS,
        payload: polls
    });
};

const getAllQuestionsFailed = (error) => {
    return ({
        type: GET_ALL_QUESTIONS_FAILED,
        payload: error
    });
};

export  const getAllQuestions = (poll_id) => dispatch => {
    dispatch(getAllQuestionsStarted());
    axios.get(Services.getAllQuestions(poll_id))
        .then(res => {
            dispatch(getAllQuestionsSuccess(res.data));
        })
        .catch( () => dispatch(getAllQuestionsFailed('Something went wrong!')));
};

const addQuestionOption = () => {
    return ({
        type: ADD_QUESTION_OPTION
    });
};

const deleteQuestionOption = () => {
    return ({
        type: REMOVE_QUESTION_OPTION
    });
};

const updateQuestionName = (payload) => {
    return ({
        type: UPDATE_QUESTION,
        payload
    });
};

const removeQuestion = (payload) => {
    return ({
        type: REMOVE_QUESTION,
        payload
    });
};

export const addOption = (optionText, pollId, questionId) => dispatch => {
    axios.post(Services.addOption, { optionText, pollId, questionId })
        .then(res => {
            dispatch(addQuestionOption());
        })
        .catch( () => console.log('TODO - ERROR HANDLING!'));
};

export const deleteOption = (optionId) => dispatch => {

    axios.post(Services.deleteOption, { optionId })
        .then(res => {
            dispatch(deleteQuestionOption());
        })
        .catch( () => console.log('TODO - ERROR HANDLING!'));
};

export const updateQuestion = (questionText, questionId) => dispatch => {
    axios.post(Services.updateQuestion, { questionText, questionId })
        .then(res => {
            dispatch(updateQuestionName({questionText, questionId}));
        })
        .catch( () => console.log('TODO - ERROR HANDLING!'));
};

export const deleteQuestion = (questionId, options) => dispatch => {
    console.log('questionId', questionId, options)
    axios.post(Services.deleteQuestion, { questionId, options })
        .then(res => {
            dispatch(removeQuestion({questionId}));
        })
        .catch( () => console.log('TODO - ERROR HANDLING!'));
};

const addNewQuestion = (payload) => {
    return ({
        type: ADD_NEW_QUESTION,
        payload
    });
};

export const addQuestion = (currentQuestion, pollId) => dispatch => {
    console.log('front addquestion', currentQuestion);
    console.log('front pollId', pollId);
    axios.post(Services.addQuestion, { currentQuestion, pollId })
        .then(res => {
            dispatch(addNewQuestion(currentQuestion));
        })
        .catch( () => console.log('TODO - ERROR HANDLING!'));
};