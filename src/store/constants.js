import axios from 'axios';
const KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';
export const SEARCH_VIDEOS_SUCCEED = 'SEARCH_VIDEOS_SUCCEED';