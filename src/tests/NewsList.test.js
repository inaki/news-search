import React from "react";
import { shallow } from "enzyme";
import { unwrap } from "@material-ui/core/test-utils";
import NewsList, { mapStateToProps } from "../components/NewsList";

const ComponentNaked = unwrap(NewsList);

describe("<NewsList />", () => {

  it("with shallow will render 2 elements, Masonry and EmptyState", () => {
    const props = {newsData:  { articles: []}, searched: 'Some Text'};
    const wrapper = shallow(<ComponentNaked classes={{}} {...props} />);
    // console.log("shallow", wrapper.debug());
    expect(wrapper.find('Fragment').children().length).toEqual(2);
  });

  it("with shallow will render 2 elements, Masonry and EmptyState", () => {
    const props = {newsData:  { articles: [{id: 1, title: "Some Title"}]}, searched: 'Some Text'}
    const wrapper = shallow(<ComponentNaked classes={{}} {...props} />);
    // console.log("shallow", wrapper.debug());
    expect(wrapper.find('Fragment').children().length).toEqual(2);
  });

//   it("will render default img when api img don't load", () => {
//     const props = {newsData:  { articles: [
//         {id: 1, title: "Some Title"},
//         {id: 2, title: "Some Title"},
//         {id: 3, title: "Some Title"}
//     ]}, searched: 'Some Text'}
//     const wrapper = shallow(<ComponentNaked classes={{}} {...props} />);
//     console.log("shallow", wrapper.debug());
    
//     expect(wrapper.find('MasonryComponent').children().length).toEqual(2);
//   });

});