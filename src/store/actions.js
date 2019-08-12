import { SEARCH_VIDEOS, SEARCH_VIDEOS_SUCCEED, SELECT_VIDEO } from './constants';
import { api } from './constants';

export const searchVideos = searchStr => {
    return dispatch => {
        dispatch({ type: SEARCH_VIDEOS });

        api.get('/search', {
            params: { q: searchStr }
        }).then(({ data: { items }}) => {
            if (items.length === 1) {
                dispatch({
                    type: SELECT_VIDEO,
                    payload: items[0]
                })
            } else  {
                dispatch({
                    type: SEARCH_VIDEOS_SUCCEED,
                    payload: items
                })
            }
        });
    };
};

export const selectVideo = video => {
    return dispatch => dispatch({
        type: SELECT_VIDEO,
        payload: video
    });
};
