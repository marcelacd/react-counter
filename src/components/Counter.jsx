import React, { useState } from "react";

import "./Counter.css";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="Counter-container">
      <h2>Counter {counter}</h2>
      <Button text="+1" onClick={() => alert("click")}/>
      <Button text="-1" onClick={() => alert("click")}/>
    </div>
  );
};

export default Counter;
