import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it("should render without cashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
});
