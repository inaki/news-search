import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../components/Loading';

describe('Loading Component', () => {
    let app;
    beforeEach( () => {
        app = shallow(<Loading />);
    });

    it('render properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('have 1 children', () => {
        expect(app.find('.laoding-component').children().length).toEqual(1);
    });
});