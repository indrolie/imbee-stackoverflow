import { call, put } from 'redux-saga/effects';
import { fetchTagsSuccess, fetchTagsFailure } from '../action/action.tag'
import { fetchTagsApi } from './api/api.tag'

export function* fetchTags(action) {
    try {
        const response = yield call(fetchTagsApi);
        yield put(fetchTagsSuccess(response.data.items));
    } catch (error) {
        yield put(fetchTagsFailure(error.message));
    }
}