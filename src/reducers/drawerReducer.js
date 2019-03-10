import { 
    OPEN_DRAWER,
    COLLAPSE_DRAWER
} from '../actions/types';


export default (state = false, action) => {
    switch(action.type) {
        case OPEN_DRAWER:
            return action.payload;
        case COLLAPSE_DRAWER: 
            return action.payload;
        default: 
            return state;
    }
};