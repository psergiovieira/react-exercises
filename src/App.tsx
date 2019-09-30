import React from "react";
import "./App.css";
import DogDetails from "./DogDetails";
import CreateBeerForm from "./CreateBeerForm";
import CreateBeerFormikForm from './CreateBeerFormikForm';
import BeerEntity from "./BeerEntity";

const App: React.FC = () => {
  const onSubmit = (values: BeerEntity): void => {
    console.log(values.beerName, values.beerType, values.hasCorn, values.ingredients);
  }

  return (
    <div className="App">
      <CreateBeerFormikForm onSubmit={onSubmit} />
    </div>
  );
};

export default App;
