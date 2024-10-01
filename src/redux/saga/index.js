import { all, takeLatest } from 'redux-saga/effects'

import { FETCH_QUESTIONS_REQUEST } from '../type/type.questions';
import { FETCH_TAGS_REQUEST } from '../type/type.tag'

import { fetchQuestions } from './saga.questions'
import { fetchTags } from './saga.tag'

export default function* rootSaga() {
    yield all([
        takeLatest(FETCH_QUESTIONS_REQUEST, fetchQuestions),
        takeLatest(FETCH_TAGS_REQUEST, fetchTags)
    ])
}
