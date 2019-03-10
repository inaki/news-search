import { 
    FETCH_ARTICLES,
    SEARCH_ARTICLE_BY_INPUT
} from '../actions/types';


export default (state = [], action) => {
    switch(action.type) {
        case FETCH_ARTICLES:
            return action.payload;
        case SEARCH_ARTICLE_BY_INPUT: 
            const filteredArticles = state.filter( item => {
                return (item.title.toLowerCase().indexOf(action.payload) !== -1);
            })
            return filteredArticles;
        default: 
            return state;
    }
};