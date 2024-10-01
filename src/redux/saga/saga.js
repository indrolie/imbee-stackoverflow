import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_QUESTIONS_REQUEST } from '../type/type';
import { fetchQuestionsSuccess, fetchQuestionsFailure } from '../action/action'

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

function* fetchQuestions(action) {
    try {
        const response = yield call(fetchQuestionsApi, action.payload.tag, action.payload.page);
        yield put(fetchQuestionsSuccess(response.data.items));
    } catch (error) {
        yield put(fetchQuestionsFailure(error.message));
    }
}

function* rootSaga() {
    yield takeLatest(FETCH_QUESTIONS_REQUEST, fetchQuestions);
}

export default rootSaga;