import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import DogDetails from "./DogDetails";

describe("App", () => {
  it("should render without cashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(DogDetails).exists()).toBe(true);
  });
});
