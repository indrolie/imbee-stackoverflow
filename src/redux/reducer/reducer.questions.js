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
            return {
                ...state,
                isLoading: false,
                questions: [...state.questions, ...action.payload],
                hasMore: action.payload.length === 20
            };

        case FETCH_QUESTIONS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};

export default reducerQuestions;
