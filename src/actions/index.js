// Action Creator
import articles from '../api/articles';
import { 
    FETCH_ARTICLES,
    SEARCH_ARTICLE_BY_INPUT,
    OPEN_DRAWER,
    COLLAPSE_DRAWER
} from './types';

// import uniqid from 'uniqid';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchArticles = () => {
    return async dispatch => {
        const response = await articles.get(`/everything?pageSize=50&domains=wsj.com,nytimes.com&apiKey=${API_KEY}`);
        dispatch({type: FETCH_ARTICLES, payload: response.data.articles});
    };
};

export const searchBeatByInput = (inputValue) => {
    return {
        type: SEARCH_ARTICLE_BY_INPUT,
        payload: inputValue.toLowerCase()
    };
};

export const openDrawer = () => {
    return {
        type: OPEN_DRAWER,
        payload: true
    };
};

export const collapseDrawer = () => {
    return {
        type: COLLAPSE_DRAWER,
        payload: false
    };
};
