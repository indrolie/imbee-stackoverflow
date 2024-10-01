import { fetchTagsRequest } from '../../redux/action/action.tag'

export const mapState = (state) => {
    return ({
        tags: state.tags.tags,
        selectedTag: state.selectedTag,
        isLoading: state.isLoading,
        hasMore: state.hasMore,
    })
};

export const mapDispatch = (dispatch) => ({
    fetchTags: () => dispatch(fetchTagsRequest())
});