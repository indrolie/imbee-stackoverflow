import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE } from '../type/type.questions'


export const fetchQuestionsRequest = (tag, page) => ({
    type: FETCH_QUESTIONS_REQUEST,
    payload: { tag, page }
});

export const fetchQuestionsSuccess = (questions) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions
});

export const fetchQuestionsFailure = (error) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload: error
});
