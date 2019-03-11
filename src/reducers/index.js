import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import searchedReducer from './searchedReducer';
import drawerReducer from './drawerReducer';
import sortByReducer from './sortByReducer';

export default combineReducers({
    articles: articlesReducer,
    searched: searchedReducer,
    drawerOpen: drawerReducer,
    sortBy: sortByReducer
});