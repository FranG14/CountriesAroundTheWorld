// import { mount } from 'enzyme';
import Header from './Header';
import CountryCards from './main';
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Searh from './Search';
import PaginationComponent from './Pagination/index';

configure({ adapter: new Adapter() });

describe("Search Component:", () => {
 it("It Renders Correctly", () => {
   shallow(<Searh />);
 });
  it("Includes One Input", () => {
   const wrapper = shallow(<Searh />);
   expect(wrapper.find("input").length).toEqual(1);
 });
});

describe("Header Component:", () => {
  it("It Renders Correctly", () => {
   shallow(<PaginationComponent />);
  });
});


