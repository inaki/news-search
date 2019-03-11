// Action Creator
import articles from '../api/articles';
import { 
    FETCH_ARTICLES,
    SEARCH_ARTICLE_BY_INPUT,
    OPEN_DRAWER,
    COLLAPSE_DRAWER,
    SORT_ARTICLE_BY
} from './types';

// import uniqid from 'uniqid';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchArticles = () => {
    return async dispatch => {
        const response = await articles.get(`/everything?pageSize=50&domains=wsj.com&language=en&apiKey=${API_KEY}`);
        dispatch({type: FETCH_ARTICLES, payload: response.data.articles});
    };
};

export const fetchArticlesByJournal = (journal) => {
    return async dispatch => {
        const response = await articles.get(`/everything?pageSize=50&domains=${journal}&language=en&apiKey=${API_KEY}`);
        dispatch({type: FETCH_ARTICLES, payload: response.data.articles});
    };
};

export const sortSelect = (sortBy) => {
    return async dispatch => {
        const response = await articles.get(`everything?pageSize=50&domains=wsj.com&sortBy=${sortBy}&language=en&apiKey=${API_KEY}`);
        dispatch({type: SORT_ARTICLE_BY, payload: response.data.articles});
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

