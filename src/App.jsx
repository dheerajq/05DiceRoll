import { useState } from "react";
import "./App.css";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(null);
  const [prevResult, setPrevResult] = useState([]);
  const rollDice = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(number);
    setPrevResult((prev) => [...prev, number]);
    // setRollNumber((prev) => prev + 1);
  };
  return (
    <>
      <div className="app">
        <h1 className="heading">Dice Roll Simulator</h1>
        <div className="dice">
          {diceNumber !== null ? (
            <div className="diceNumber">{diceNumber}</div>
          ) : (
            <p>roll the dice</p>
          )}
        </div>
        <button className="roll-dice" onClick={rollDice}>
          Roll Dice
        </button>
        <ul>
          {prevResult.map((prev, index) => (
            <li key={index} className="list">
              <h1>Roll {index + 1}</h1>
              {prev}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
