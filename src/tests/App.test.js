import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';


describe('App Component', () => {
    let app;

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    describe('when articles array from state', () => {
        it('is empty, it render 4 elements', () => {
            expect(app.find('.app-content').children().length).toEqual(4);
        });
    
        it('at least have 1 element, it render 3 elements', () => {
            app.setProps({newsData: {articles: [{id: 1, title: 'Some title'}]}})
            expect(app.find('.app-content').children().length).toEqual(3);
        });
    });
});