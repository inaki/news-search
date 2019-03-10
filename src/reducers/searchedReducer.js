import { 
    SEARCH_ARTICLE_BY_INPUT
} from '../actions/types';


export default (state = '', action) => {
    switch(action.type) {
        case SEARCH_ARTICLE_BY_INPUT:
            return action.payload;
        default: 
            return state;
    }
};