import React from "react";
import { shallow } from "enzyme";
import CreateBeerForm from "./CreateBeerForm";

describe("CreateBeerForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CreateBeerForm />);
  });

  it("should be created", () => {
    expect(wrapper).toBeDefined();
  });

  it("should contains beer name label and input", () => {
    const beerNameLabel = 'label[id="idLabelName"]';
    const beerNameInput = 'input[id="idName"]';

    expect(wrapper.find(beerNameLabel).exists()).toBeTruthy();
    expect(wrapper.find(beerNameInput).exists()).toBeTruthy();
  });

  it("should contains beer type input and label", () => {
    const beerTypeLabel = 'label[id="idLabelBeerType"]';
    const beerTypeInput = 'select[id="idBeerType"]';

    const beerTypeLabelExists = wrapper.find(beerTypeLabel).exists();
    const beerTypeInputExists = wrapper.find(beerTypeInput).exists();

    expect(beerTypeLabelExists).toBeTruthy();
    expect(beerTypeInputExists).toBeTruthy();
  });

  it('should contains "has corn" label and input', () => {
    const hasCornLabel = 'label[id="idHasCornLabel"]';
    const hasCornInput = 'input[id="idHasCorn"]';

    expect(wrapper.find(hasCornLabel).exists()).toBeTruthy();
    expect(wrapper.find(hasCornInput).exists()).toBeTruthy();
  });

  it('should contains "ingredients" label and textarea', () => {
    const hasIngredientsLabel = 'label[id="idLabelIdIngredients"]';
    const hasIngredientsInput = 'textarea[id="idIngredients"]';

    expect(wrapper.find(hasIngredientsLabel).exists()).toBeTruthy();
    expect(wrapper.find(hasIngredientsInput).exists()).toBeTruthy();
  });

  it("should contains submit button", () => {
    const submitButton = 'button[id="idSubmitButton"]';
    expect(wrapper.find(submitButton).exists()).toBeTruthy();
  });

  it("should contains mainDiv", () => {
    const mainDiv = 'div[id="idMainDiv"]';

    expect(wrapper.find(mainDiv).exists()).toBeTruthy();
  });

  it("should call console.log two times when I click on submit button", () => {
    const form = 'form[id="idForm"]';
    console.log = jest.fn();
    const mockedEvent = {
      preventDefault: jest.fn(),
      target: {elements:{ name:{}}}           
    };    

    wrapper.find(form).simulate("submit", mockedEvent);
    expect(console.log).toHaveBeenCalledTimes(2);
  });

});
