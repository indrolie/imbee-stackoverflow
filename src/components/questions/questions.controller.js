import { fetchQuestionsRequest } from '../../redux/action/action'

export const mapState = (state) => ({
    questions: state.questions,
    isLoading: state.isLoading,
    hasMore: state.hasMore,
});

export const mapDispatch = (dispatch) => ({
    fetchQuestions: (tag, page) => dispatch(fetchQuestionsRequest(tag, page)),
});