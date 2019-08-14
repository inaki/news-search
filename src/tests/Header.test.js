import React from "react";
import { shallow } from "enzyme";
import { unwrap } from "@material-ui/core/test-utils";
import Header, { mapStateToProps } from "../components/Header";

const ComponentNaked = unwrap(Header);

describe("<Header />", () => {
  it("with shallow", () => {
    const wrapper = shallow(<ComponentNaked classes={{}} />);
    //console.log("shallow", wrapper.debug());
    expect(wrapper.find('.appbar').children().length).toEqual(1)
  });

  it('add string to state `inputValue` when on change', () => {
    const wrapper = shallow(<ComponentNaked classes={{}} />);  
    wrapper.setProps({searchBeatByInput: () => {}});
    const event = { 
        preventDefault() {},
        target: { value: 'some text'}
    };
    
        wrapper.find('.search-input').simulate('change', event);
        expect(wrapper.state().inputValue).toEqual('some text');
    });

    it('change string to state `sortBy` when on change', () => {
        const wrapper = shallow(<ComponentNaked classes={{}} />);  
        wrapper.setProps({
            sortSelect: () => {},
            newsData: { source: 'wsj.com'}
        });
        const event = { 
            preventDefault() {},
            target: { value: 'popularity'}
        };
        
            wrapper.find('.select-input').simulate('change', event);
            expect(wrapper.state().sortBy).toEqual('popularity');


    });

    it('mapStateToProps return newData state', () => {
        expect(mapStateToProps({state: { newDate: []}})).toEqual({});
    });

});