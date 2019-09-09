import React from "react";
import "./App.css";
import DogDetails from "./DogDetails";

const App: React.FC = () => {
  const onBark = () => {
    alert('Woof');
  };

  return (
    <div className="App">
      <header className="App-header">
        <DogDetails
          name="Zeus"
          onBark={onBark}
          imageUrl="https://ichef.bbci.co.uk/news/624/cpsprodpb/29BB/production/_107038601_gettyimages-1041987488.jpg"
        />
      </header>
    </div>
  );
};

export default App;
