import React from 'react';
import * as types from '../actions/types';

import * as actions from '../actions';
import articles from '../api/articles';

describe('Actions creators', () => {
    it('return correct obj when `searchBeatByInput`', () => {
        const expectObj = {type: types.SEARCH_ARTICLE_BY_INPUT, payload: 'some input'};
        expect(actions.searchBeatByInput('some input')).toEqual(expectObj);
    });

    it('return obj with payload of true whenb openDrawer is dispatch', () => {
        const expectObj = {type: types.OPEN_DRAWER, payload: true};
        expect(actions.openDrawer()).toEqual(expectObj);
    });
    
    it('return obj with payload of true whenb openDrawer is dispatch', () => {
        const expectObj = {type: types.COLLAPSE_DRAWER, payload: false};
        expect(actions.collapseDrawer()).toEqual(expectObj);
    });
});


// describe('testing api', () => {
//   beforeEach(() => {
//     fetch.resetMocks()
//   })

//   it('calls google and returns data to me', () => {
//     fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

//     //assert on the response
//     articles.get('google').then(res => {
//       expect(res.data).toEqual('12345')
//     })

//     //assert on the times called and arguments given to fetch
//     expect(fetch.mock.calls.length).toEqual(1)
//     expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
//   })
// })