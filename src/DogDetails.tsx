import React, { useState } from "react";

interface Props {
  name: string;
  imageUrl: string;
  onBark: () => void;
}

function DogDetails(props: Props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imageUrl} alt="dog " />
      <br />
      <button onClick={props.onBark}>Bark</button>
      <button onClick={() => setCount(count + 1)}>Scold</button>
      <p>{count}</p>
    </div>
  );
}

export default DogDetails;
