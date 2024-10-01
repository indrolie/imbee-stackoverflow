import { FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE } from '../type/type.tag';

const initialState = {
    tags: [],
    isLoading: false,
    error: null,
    selectedTag: ''
};

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAGS_REQUEST:
            return { ...state, isLoading: true };
        case FETCH_TAGS_SUCCESS:
            return { ...state, isLoading: false, tags: action.payload };
        case FETCH_TAGS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
            
        default:
            return state;
    }
};

export default tagsReducer;