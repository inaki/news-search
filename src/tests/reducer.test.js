import * as types from '../actions/types';
import * as actions from '../actions';
import drawerReducer from '../reducers/drawerReducer';
import newsReducer from '../reducers/newsReducer';
import searchedReducer from '../reducers/searchedReducer';
import { createStore } from 'redux';
import rootReducer from '../reducers';

describe('reducers', () => {
    describe('when openDrawer or collapseDrawer is dispach', () => {
        it('drawerReducer will return false if no type', () => {
            const actionCreator = {type: 'NO_TYPE', payload: undefined};
            expect(drawerReducer(undefined, actionCreator)).toBe(false)
        });
        it('drawerReducer will return true with OPEN_DRAWER type', () => {
            const actionCreator = {type: types.OPEN_DRAWER, payload: true};
            expect(drawerReducer(undefined, actionCreator)).toBe(true)
        });
        it('drawerReducer will return false with COLLAPSE_DRAWER type', () => {
            const actionCreator = {type: types.COLLAPSE_DRAWER, payload: false};
            expect(drawerReducer(undefined, actionCreator)).toBe(false)
        });
    });

    describe('when newsReducer is dispach', () => {
        let actionCreatorFetch;
        let actionCreatorSort;
        let expected;
        let defaultState;
        beforeEach(() => {
            actionCreatorFetch = { 
                type: types.FETCH_ARTICLES, 
                payload: {articles: [{id: 1, title: 'some title'}], source: 'wsj.com'}
            };

            actionCreatorSort = { 
                type: types.SORT_ARTICLE_BY, 
                payload: {articles: [{id: 1, title: 'some title'}], source: 'wsj.com'}
            };

            expected = {articles: [{id: 1, title: 'some title'}], source: 'wsj.com'};
            defaultState = {articles: [], source: 'wsj.com'};
        });
     
        it('newsReducer will return default state if no action match', () => {
            expect(newsReducer(undefined, {type: 'SOME_OTHER_ACTION', undefined})).toEqual(defaultState)
        });

        it('newsReducer will return new obj with FETCH_ARTICLES type', () => {
            expect(newsReducer(undefined, actionCreatorFetch)).toEqual(expected)
        });

        it('newsReducer will return new obj with SORT_ARTICLE_BY type', () => {
            expect(newsReducer(undefined, actionCreatorSort)).toEqual(expected)
        });
    });

    describe('when searchBeatByInput is dispach', () => {
        let expected;
        let defaultState;
        beforeEach(() => {
            expected = 'some text';
            defaultState = '';
        });
        it('searcedReducer will return an empty string', () => {
            const actionCreator = {type: 'NO_TYPE', payload: undefined};
            expect(searchedReducer(undefined, actionCreator)).toBe(defaultState)
        });

        it('searcedReducer will return `some text` whenn SEARCH_ARTICLE_BY_INPUT', () => {
            const actionCreator = {type: types.SEARCH_ARTICLE_BY_INPUT, payload: 'some text'};
            expect(searchedReducer(undefined, actionCreator)).toBe(expected)
        });

    });

    describe('root reducer', () => {
        it('should handle recipe creation', () => {
            const newState = {"drawerOpen": false, "newsData": {"articles": [], "source": "wsj.com"}, "searched": "some text"};
            const store = createStore(rootReducer, []);        
            const action = actions.searchBeatByInput('Some Text');
            store.dispatch(action);
        
            const actual = store.getState();
            const expected = newState;
        
            expect(actual).toEqual(expected);
          });
    });
});
