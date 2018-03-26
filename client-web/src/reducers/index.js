import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import PollReducer from './PollReducers';
import QuestionReducer from './QuestionReducers';
import SendPollAnswersReducers from './SendPollAnswersReducers';


export default combineReducers({
    user: UserReducer,
    login: LoginReducer,
    register: RegisterReducer,
    polls: PollReducer,
    questions: QuestionReducer,
    answers: SendPollAnswersReducers,
});