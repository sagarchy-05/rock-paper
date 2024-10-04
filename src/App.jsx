import React, { useState } from 'react';
import './App.css';

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const choices = ['Rock', 'Paper', 'Scissors'];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
    setGameStarted(true);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a draw!");
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  const handlePlayAgain = () => {
    setUserChoice('');
    setComputerChoice('');
    setResult('');
    setGameStarted(false);
  };

  return (
    <div className='App'>
      <h1>Rock Paper Scissors</h1>
      {!gameStarted ? (
        <div className='choices'>
          <h2>Select your choice:</h2>
          {choices.map((choice) => (
            <button key={choice} onClick={() => handleUserChoice(choice)}>
              {choice}
            </button>
          ))}
        </div>
      ) : (
        <div className='container'>
          <div className='results-container'>
            <div className='choice-display'>
              <h3>Your choice:</h3>
              <p>{userChoice}</p>
            </div>
            <div className='choice-display'>
              <h3>Computer's choice:</h3>
              <p>{computerChoice}</p>
            </div>
          </div>
          <div className='result'>
            <h2>{result}</h2>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        </div>
      )}
      <h4>Sagar Choudhary</h4>
    </div>
  );
}

export default App;
