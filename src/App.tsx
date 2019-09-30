import React from "react";
import "./App.css";
import DogDetails from "./DogDetails";
import CreateBeerForm from "./CreateBeerForm";
import CreateBeerFormikForm from './CreateBeerFormikForm';
import BeerEntity from "./BeerEntity";

const App: React.FC = () => {
  const onSubmit = (beerEntity: BeerEntity): void => {
    console.log(beerEntity.beerName);
  }

  return (
    <div className="App">
      <CreateBeerFormikForm onSubmit={onSubmit} />
    </div>
  );
};

export default App;
