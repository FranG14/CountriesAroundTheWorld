// import { mount } from 'enzyme';
import CountryDetail from './countryDetail';
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Search Component:", () => {
  it("Includes One Input", () => {
   const wrapper = shallow(<CountryDetail />);
   expect(wrapper.find("div").length).toEqual(1);
 });

});


