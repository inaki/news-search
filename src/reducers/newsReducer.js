import { 
    FETCH_ARTICLES,
    SORT_ARTICLE_BY
} from '../actions/types';

const intitialState = {articles: [], source: 'wsj.com'};

export default (state = intitialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLES:
            return {...state, ...action.payload};
        case SORT_ARTICLE_BY:
            return {...state, ...action.payload};
        default: 
            return state;
    }
};