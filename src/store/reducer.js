import {SEARCH_VIDEOS_SUCCEED, SELECT_VIDEO} from './constants';

export const initialState = {
    defaultValue: 'Default text',
    videos: [],
    selectedVideo: null
};

export function reducer(state, { type, payload }) {
    debugger;
    switch(type) {
        case SEARCH_VIDEOS_SUCCEED:
            return { ...state, videos: payload };
        case SELECT_VIDEO:
            return { ...state, selectedVideo: payload };
        default:
            return state;
    }
}