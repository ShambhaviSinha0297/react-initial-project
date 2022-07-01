import React from 'react';
import { useState } from 'react';
import "./Counter.css";

function Counter() {
  const [counterValue, setcounterValue] = useState(0);
  const [inputValue, setinputValue] = useState(1);

  const addToCounter = () => {
    setcounterValue(counterValue + inputValue)
  }

  const subtractFromCounter = () => {
    setcounterValue(counterValue - inputValue)
  }

  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2 data-testid="counter">0</h2>
      <button 
      data-testid="subBtn"
      onClick={subtractFromCounter}
      >-</button>

      <input
        data-testid="input"
        type="number"
        value={inputValue}
        className="text-center"
        onChange={(e) => {
          setinputValue(e.target.value)
        }}>
      </input>

      <button
        data-testid="addBtn"
        onClick={addToCounter}
      >+</button>
    </div>
  )
}

export default Counter