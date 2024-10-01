import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchQuestionsSuccess, fetchQuestionsFailure } from '../action/action.questions'
import { fetchQuestionsApi } from './api/api.questions'

export function* fetchQuestions(action) {
    try {
        const response = yield call(fetchQuestionsApi, action.payload.tag, action.payload.page);
        yield put(fetchQuestionsSuccess(response.data.items));
    } catch (error) {
        yield put(fetchQuestionsFailure(error.message));
    }
}