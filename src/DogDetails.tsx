import React, { useState } from "react";

interface Props {
  name: string;
  imageUrl: string;
  onBark: () => void;
}

function DogDetails(props: Props) {
  const [count, setCount] = useState(0);
  return (
    <div id="idMainDiv">
      <h2 id="idName">{props.name}</h2>
      <img id="idImage" src={props.imageUrl} alt="dog" />
      <br />
      <button id="idBarkButton" onClick={props.onBark}>Bark</button>
      <button id="idScoldButton" onClick={() => setCount(count + 1)}>Scold</button>
      <p id="idCount">{count}</p>
    </div>
  );
}

export default DogDetails;
