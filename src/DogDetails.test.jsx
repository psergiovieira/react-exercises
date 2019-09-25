import React from "react";
import DogDetails from "./DogDetails";
import { shallow, mount } from "enzyme";

describe("Dogetails", () => {
  const props = {
    name: "",
    imageUrl: "",
    onBark: jest.fn()
  };

  let wrapper;
	beforeEach(() => {
    wrapper = shallow(<DogDetails {...props} />);
  });
  
  const idName = 'h2[id="idName"]';
  const idImage = 'img[id="idImage"]';
  const idBarkButton = 'button[id="idBarkButton"]';
  const idScoldButton = 'button[id="idScoldButton"]';
  const idCount = 'p[id="idCount"]';
  const idMainDiv = 'div[id="idMainDiv"]';

  it("should be created without crash", () => {
    expect(wrapper).toBeDefined();
  });

  it("should contains all the visual elements defined", () => {
    expect(wrapper.find(idName).exists()).toBeTruthy();
    expect(wrapper.find(idImage).exists()).toBeTruthy();
    expect(wrapper.find(idImage).prop("alt")).toBe("dog");
    expect(wrapper.find(idBarkButton).exists()).toBeTruthy();
    expect(wrapper.find(idScoldButton).exists()).toBeTruthy();
    expect(wrapper.find(idCount).exists()).toBeTruthy();
  });

  it("should call onBark function when button is clicked", () => {
    wrapper.find(idBarkButton).simulate("click");
    expect(props.onBark).toHaveBeenCalledTimes(1);
  });

  it("should display '1' when I click on scold button", () => {
    wrapper.find(idScoldButton).simulate("click");
    expect(wrapper.find(idCount).text()).toBe("1");
  });

  it("should display '5' when I click on scold button", () => {
    wrapper.find(idScoldButton).simulate("click");
    wrapper.find(idScoldButton).simulate("click");
    wrapper.find(idScoldButton).simulate("click");
    wrapper.find(idScoldButton).simulate("click");

    expect(wrapper.find(idCount).text()).toBe("4");
  });

  it("should bind with props passed", () => {
    const dogName = "Iuytrn";
    const dogImage = "someimage.url";

    const localProps = {
      name: dogName,
      imageUrl: dogImage,
      onBark: jest.fn()
    };

    const component = shallow(<DogDetails {...localProps} />);
    expect(component.find(idName).text()).toBe(dogName);
    expect(component.find(idImage).prop("src")).toBe(dogImage);
  });

  it("should contains the main div", () => {
    const component = mount(<DogDetails {...props} />);
    expect(component.find(idMainDiv).exists()).toBeTruthy();
  });
});
