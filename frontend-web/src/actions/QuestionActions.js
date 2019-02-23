import axios from 'axios';
import { Services } from '../services/Services';
import {
    GET_ALL_QUESTIONS_FAILED, GET_ALL_QUESTIONS_STARTED, GET_ALL_QUESTIONS_SUCCESS
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