import React from "react";
import "./style.css";
import React, { useState } from "react";

function Counter() {
  const [contValue, setValue] = useState(0);
  const [numTimes, setTimes] = useState(0);

  return (
    <div>
      <p>{contValue}</p>
      <button
        onClick={() => {
          setValue(contValue + 1);
          setTimes(numTimes + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setValue(contValue - 1);
          setTimes(numTimes + 1);
        }}
      >
        Decrease
      </button>
      <div>
        <p>Veces Utilizado {numTimes}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
