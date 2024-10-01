import axios from "axios";

export const fetchQuestionsApi = (tag, page) => {
    return axios.get('https://api.stackexchange.com/2.3/questions', {
        params: {
            page,
            pagesize: 20,
            order: 'desc',
            sort: 'activity',
            tagged: tag,
            site: 'stackoverflow',
        }
    });
};