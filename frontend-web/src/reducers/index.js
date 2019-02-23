import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginReducer from './LoginReducer';
import PollReducer from './PollReducer';
import QuestionReducer from './QuestionReducer';
import AnswerReducer from './AnswerReducer';

export default combineReducers({
    user: UserReducer,
    login: LoginReducer,
    polls: PollReducer,
    question: QuestionReducer,
    answer: AnswerReducer,
});