import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTagsSuccess, fetchTagsFailure } from '../action/action.tag'

const fetchTagsApi = () => {
    return axios.get('https://api.stackexchange.com/2.3/tags', {
        params: {
            order: 'desc',
            sort: 'popular',
            filter: 'default',
            site: 'stackoverflow'
        }
    });
};

export function* fetchTags(action) {
    try {
        const response = yield call(fetchTagsApi);
        yield put(fetchTagsSuccess(response.data.items));
    } catch (error) {
        yield put(fetchTagsFailure(error.message));
    }
}