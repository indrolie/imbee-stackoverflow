import { combineReducers } from 'redux';
import reducerQuestions from './reducer.questions';
import reducerTags from './reducer.tag';

const rootReducer = combineReducers({
    questions: reducerQuestions,
    tags: reducerTags
});

export default rootReducer;