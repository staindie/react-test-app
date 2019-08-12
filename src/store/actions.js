import {SEARCH_VIDEOS, SEARCH_VIDEOS_SUCCEED} from './constants';
import { api } from './constants';

const searchVideos = searchStr => {
    return dispatch => {
        dispatch({ type: SEARCH_VIDEOS });

        api.get('/search', {
            params: { q: searchStr }
        }).then(payload => dispatch({ type: SEARCH_VIDEOS_SUCCEED, payload }));
    };
};
