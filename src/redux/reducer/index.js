import { combineReducers } from 'redux';
import reducerQuestions from './reducer.questions';

const rootReducer = combineReducers({
    questions: reducerQuestions
});

export default rootReducer;