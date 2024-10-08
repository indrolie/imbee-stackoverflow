import { fetchQuestionsRequest } from '../../redux/action/action.questions'

export const mapState = (state) => {
    console.log('questions', state.questions.questions)
    return ({
        questions: state.questions.questions,
        isLoading: state.questions.isLoading,
        hasMore: state.questions.hasMore,
    })
};

export const mapDispatch = (dispatch) => ({
    fetchQuestions: (tag, page) => dispatch(fetchQuestionsRequest(tag, page)),
});