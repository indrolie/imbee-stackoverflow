import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchQuestionsSuccess, fetchQuestionsFailure } from '../action/action.questions'

const fetchQuestionsApi = (tag, page) => {
    return axios.get('https://api.stackexchange.com/2.2/questions', {
        params: {
            page,
            pagesize: 20,
            order: 'desc',
            sort: 'activity',
            tagged: tag,
            site: 'stackoverflow',
        }
    });
};

export function* fetchQuestions(action) {
    try {
        const response = yield call(fetchQuestionsApi, action.payload.tag, action.payload.page);
        yield put(fetchQuestionsSuccess(response.data.items));
    } catch (error) {
        yield put(fetchQuestionsFailure(error.message));
    }
}