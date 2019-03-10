// Action Creator
import articles from '../api/articles';
import { 
    FETCH_ARTICLES,
    SEARCH_ARTICLE_BY_INPUT
} from './types';

// import uniqid from 'uniqid';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchArticles = () => {
    return async dispatch => {
        const response = await articles.get(`/top-headlines?country=us&apiKey=${API_KEY}`);
        dispatch({type: FETCH_ARTICLES, payload: response.data.articles});
    };
};

export const searchBeatByInput = (inputValue) => {
    return {
        type: SEARCH_ARTICLE_BY_INPUT,
        payload: inputValue.toLowerCase()
    };
};
