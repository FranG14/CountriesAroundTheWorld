import Home from './home'
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Home Component:", () => {
 it("It Renders Correctly", () => {
   shallow(<Home />);
 });
  it("Includes Three Divs", () => {
   const wrapper = shallow(<Home />);
   expect(wrapper.find("div").length).toEqual(3);
  });
    it("Includes One H1 Title", () => {
   const wrapper = shallow(<Home />);
   expect(wrapper.find("h1").length).toEqual(1);
    });
    it("Includes One Form with Action to Backend URL", () => {
   const wrapper = shallow(<Home />);
   expect(wrapper.find("form[action='http://localhost:3000/countries/']").length).toEqual(1);
    });
    it("Includes One Input with Type 'Submit'", () => {
   const wrapper = shallow(<Home />);
      expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
 });
});



