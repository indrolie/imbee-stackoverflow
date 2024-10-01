import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE } from '../type/type.questions';

const initialState = {
    questions: [],
    isLoading: false,
    error: null,
    hasMore: true,
};

const reducerQuestions = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return { ...state, isLoading: true, error: null };

        case FETCH_QUESTIONS_SUCCESS:
            const newQuestions = state.currentTag === action.payload.tag 
                ? [...state.questions, ...action.payload.questions]
                : action.payload.questions;  // refresh the list of questions if using new tag

            return {
                ...state,
                isLoading: false,
                questions: newQuestions,
                hasMore: action.payload.questions.length === 20,
                currentTag: action.payload.tag
            };

        case FETCH_QUESTIONS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};

export default reducerQuestions;
