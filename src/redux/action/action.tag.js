import { FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE } from '../type/type.tag'

export const fetchTagsRequest = () => ({
    type: FETCH_TAGS_REQUEST,
});

export const fetchTagsSuccess = (tags) => ({
    type: FETCH_TAGS_SUCCESS,
    payload: tags,
});

export const fetchTagsFailure = (error) => ({
    type: FETCH_TAGS_FAILURE,
    payload: error,
});