// Action Creator
import articles from '../api/articles';
import { 
    FETCH_ARTICLES,
    SEARCH_ARTICLE_BY_INPUT,
    OPEN_DRAWER,
    COLLAPSE_DRAWER,
    SORT_ARTICLE_BY
} from './types';

// News Api Secret Key
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

// fetch articles for the first time from componentDidMount() return and object {}
export const fetchArticles = (source) => {
    return async dispatch => {
        const response = await articles.get(`/everything?pageSize=100&domains=${source}&language=en&apiKey=${API_KEY}`);
        dispatch({type: FETCH_ARTICLES, payload: {articles: response.data.articles, source}});
    };
};

// fetch articles by news source and update state return and object {}
export const fetchArticlesByJournal = (source) => {
    return async dispatch => {
        const response = await articles.get(`/everything?pageSize=100&domains=${source}&language=en&apiKey=${API_KEY}`);
        dispatch({type: FETCH_ARTICLES, payload: {articles: response.data.articles, source}});
    };
};

// fetch articles by news source and sort feature return and object {}
export const sortSelect = (sortBy, source) => {
    return async dispatch => {
        const response = await articles.get(`everything?pageSize=100&domains=${source}&sortBy=${sortBy}&language=en&apiKey=${API_KEY}`);
        dispatch({type: SORT_ARTICLE_BY, payload: {articles: response.data.articles, source}});
    };
};

// handle update of input on search, return a string ''
export const searchBeatByInput = (inputValue) => {
    return {
        type: SEARCH_ARTICLE_BY_INPUT,
        payload: inputValue.toLowerCase()
    };
};

// action to open the sidebar return a bool
export const openDrawer = () => {
    return {
        type: OPEN_DRAWER,
        payload: true
    };
};

// action to close the sidebar return a bool
export const collapseDrawer = () => {
    return {
        type: COLLAPSE_DRAWER,
        payload: false
    };
};


