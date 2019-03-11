import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import searchedReducer from './searchedReducer';
import drawerReducer from './drawerReducer';

export default combineReducers({
    newsData: newsReducer,
    searched: searchedReducer,
    drawerOpen: drawerReducer
});