import React from "react";
import BeerFormView from "./BeerFormView";
import { shallow } from "enzyme";

describe("BeerFormView", () => {
  let beerFormView;

  const beerTypes = [""];
  const formik = {
    errors: {      
    }
  };

  beforeEach(() => {
    beerFormView = shallow(<BeerFormView beerTypes={beerTypes} formik={formik} />);
  });

  it("should be created without crash", () => {
    expect(beerFormView).toBeDefined();
  });
  
  it("should render all elements correctly", () => {
    const labelBeerName = 'label[id="idLabelName"]';
    const inputBeerName = 'input[id="idBeerName"]';
    const labelBeerType = 'label[id="idBeerType"]';
    const selectBeerType = 'select[id="idBeerType"]';
    const labelHasCorn = 'label[id="idHasCornLabel"]';
    const inputHasCorn = 'input[id="isHasCorn"]';
    const labelIngredients = 'label[id="idLabelIdIngredients"]';
    const textAreaIngredients = 'textarea[id="idIngredients"]';
    const button = 'Button[id="idSubmit"]';

    expect(beerFormView.find(labelBeerName)).toBeDefined();
    expect(beerFormView.find(inputBeerName)).toBeDefined();
    expect(beerFormView.find(labelBeerType)).toBeDefined();
    expect(beerFormView.find(selectBeerType)).toBeDefined();
    expect(beerFormView.find(labelHasCorn)).toBeDefined();
    expect(beerFormView.find(inputHasCorn)).toBeDefined();
    expect(beerFormView.find(labelIngredients)).toBeDefined();
    expect(beerFormView.find(textAreaIngredients)).toBeDefined();
    expect(beerFormView.find(button)).toBeDefined();
  });
});
