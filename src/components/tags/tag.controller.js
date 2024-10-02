import { fetchTagsRequest } from '../../redux/action/action.tag'

export const mapState = (state) => {
    return ({
        tags: state.tags.tags,
        selectedTag: state.questions.currentTag,
        isLoading: state.tags.isLoading
    })
};

export const mapDispatch = (dispatch) => ({
    fetchTags: () => dispatch(fetchTagsRequest())
});