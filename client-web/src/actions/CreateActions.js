import axios from 'axios';

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_OPTION = "ADD_OPTION";
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_FAILED = "ADD_QUESTION_FAILED";
export const ADD_OPTION_SUCCESS = "ADD_OPTION_SUCCESS";
export const ADD_OPTION_FAILED = "ADD_OPTION_FAILED";


export const addQuestionSuccess = () => {
    return ({
        type: ADD_QUESTION_SUCCESS
    });
};

export const addQuestionFailed = () => {
    return ({
        type: ADD_QUESTION_FAILED
    });
};

export const addOptionSuccess = () => {
    return ({
        type: ADD_OPTION_SUCCESS
    });
};

export const addOptionFailed = () => {
    return ({
        type: ADD_OPTION_FAILED
    });
};

export const addOption = (question_id, textAnswer) => {
    return ({
        type: ADD_OPTION,
        payload: {question_id, textAnswer}
    });
};

export const addQuestion = (type_id, textAnswer) => {
    return ({
        type: ADD_QUESTION,
        payload: {type_id, textAnswer}
    });
};
