import { 
    SORT_ARTICLE_BY
} from '../actions/types';


export default (state = [], action) => {
    switch(action.type) {
        case SORT_ARTICLE_BY:
            return action.payload;
        default: 
            return state;
    }
};