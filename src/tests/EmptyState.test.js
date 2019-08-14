import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from '../components/EmptyState';

describe('EmptyState Component', () => {
    let app;
    beforeEach(() => {
        app = shallow(<EmptyState />)
    });
    
    it('reders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('render text for empty state', () => {
        expect(app.text()).toEqual('No Results...');
    });

});
