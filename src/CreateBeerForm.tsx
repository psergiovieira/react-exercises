import React, { useState } from "react";

function CreateBeerForm() {
  const [beerName, setBeerName] = useState("");
  const [beerType, setBeerType] = useState("Ale");
  const [hasCorn, setHasCorn] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const beersTypes = ["Larger", "Ale", "Stout", "Malt"];
  const handleSubmit = (event: any) => {    
    event.preventDefault();   

    //getting name by useState
    console.log(beerName);

    //getting name by form
    console.log(event.target.elements.name.value);    
  };

  return (
    <div id="idMainDiv">
      <form onSubmit={handleSubmit} id="idForm">
        <label id="idLabelName" htmlFor="idName">Beer Name:</label>
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
        <label id="idLabelBeerType" htmlFor="idBeerType"> Beer Type:</label>
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
        <label id="idHasCornLabel" htmlFor="idHasCorn"> Has corn: </label>
        <input
          id="idHasCorn"
          type="checkbox"
          checked={hasCorn}
          onChange={event => setHasCorn(!hasCorn)}
        />
        <br />
        <label id="idLabelIdIngredients" htmlFor="idIngredients"> Ingredients: </label>
        <textarea
          id="idIngredients"
          name="ingredients"
          value={ingredients}
          onChange={event => setIngredients(event.target.value)}
        />

        <br/>
        <button id="idSubmitButton" type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBeerForm;
