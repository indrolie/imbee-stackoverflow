import { all, takeLatest } from 'redux-saga/effects'
import { FETCH_QUESTIONS_REQUEST } from '../type/type.questions';
import { fetchQuestions } from './saga.questions'

export default function* rootSaga() {
    yield all([
        takeLatest(FETCH_QUESTIONS_REQUEST, fetchQuestions)
    ])
}
