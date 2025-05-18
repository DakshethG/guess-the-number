import { useState } from 'react';
import Result from './result';
import './App.css';

const randomNumber = Math.floor(Math.random() * 10) + 1;

function App() {
  const [number, setNumber] = useState();

  const handleNumberChange = (e) => {
    const inputNumber = parseInt(e.target.value, 10);
    setNumber(inputNumber);
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">
          Guess a number between 1 to 10 
        </label>
      </div>
      <input id="term" name="term" type="number" onChange={handleNumberChange} />
      <Result randomNumber={randomNumber} guessNumber={number} />
      <button className='btn' onClick={()=> window.location.reload()}> New Game</button>
    </div>
  );
}

export default App;