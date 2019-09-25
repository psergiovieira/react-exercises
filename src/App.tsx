import React from "react";
import "./App.css";
import DogDetails from "./DogDetails";
import CreateBeerForm from "./CreateBeerForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <CreateBeerForm />
    </div>
  );
};

export default App;
