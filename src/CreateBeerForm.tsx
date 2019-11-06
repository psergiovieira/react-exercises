import React, { useState } from "react";
import * as Yup from "yup";

const beerFormSchema = Yup.object().shape({
  beerName: Yup.string()
    .min(2, "Beer name is too Short!")
    .max(50, "Beer name is too Long!")
    .required("Beer name is Required"),
  beerType: Yup.string()
    .min(3, "Too Short!")
    .max(6, "Too Long!")
    .required("Required"),
  hasCorn: Yup.boolean().required("Required"),
  ingredients: Yup.string()
    .min(5)
    .max(200)
    .required("Required")
});

function CreateBeerForm() {
  const [beerName, setBeerName] = useState("");
  const [beerType, setBeerType] = useState("Ale");
  const [hasCorn, setHasCorn] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const beersTypes = ["Larger", "Ale", "Stout", "Malt"];
  const handleSubmit = (event: any) => {
    event.preventDefault();
    //getting name by useState
    console.log(beerName, beerType, hasCorn, ingredients);

    //getting name by form
    console.log(event.target.elements.name.value);
  };

  const isFormValid = (): boolean => {
    try {
      const beerRecord = {
        beerName: beerName,
        beerType: beerType,
        hasCorn: hasCorn,
        ingredients: ingredients
      };
      
      beerFormSchema.validateSync(beerRecord);

      return true;
    } catch {
      return false;
    }
  };

  return (
    <div id="idMainDiv">
      <form onSubmit={handleSubmit} id="idForm">
        <label id="idLabelName" htmlFor="idName">
          Beer Name:
        </label>
        <input
          type="text"
          value={beerName}
          name="name"
          id="idName"
          onChange={event => {
            setBeerName(event.target.value);
          }}
        />

        <br />
        <label id="idLabelBeerType" htmlFor="idBeerType">
          {" "}
          Beer Type:
        </label>
        <select
          id="idBeerType"
          name="beerType"
          value={beerType}
          onChange={event => setBeerType(event.target.value)}
        >
          {beersTypes.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <br />
        <label id="idHasCornLabel" htmlFor="idHasCorn">
          {" "}
          Has corn:{" "}
        </label>
        <input
          id="idHasCorn"
          type="checkbox"
          checked={hasCorn}
          onChange={event => setHasCorn(!hasCorn)}
        />
        <br />
        <label id="idLabelIdIngredients" htmlFor="idIngredients">
          {" "}
          Ingredients:{" "}
        </label>
        <textarea
          id="idIngredients"
          name="ingredients"
          value={ingredients}
          onChange={event => setIngredients(event.target.value)}
        />

        <br />
        <button
          id="idSubmitButton"
          type="submit"
          value="Submit"
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBeerForm;
