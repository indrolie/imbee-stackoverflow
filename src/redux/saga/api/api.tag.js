import axios from "axios";

export const fetchTagsApi = () => {
    return axios.get('https://api.stackexchange.com/2.3/tags', {
        params: {
            order: 'desc',
            sort: 'popular',
            filter: 'default',
            site: 'stackoverflow'
        }
    });
};