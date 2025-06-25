import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaTrophy, FaSadTear } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const GuessAndWin = () => {
  // State to store the user's number input
  const [numberInput, setNumberInput] = useState<string>('');
  // State to store the randomly generated number (between 1 and 100)
  const [randomNumber, setRandomNumber] = useState<number>(() => Math.floor(Math.random() * 100) + 1);

  // Handles the guess submission
  const guessNumber = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Check if the input field is empty
    if (!numberInput) {
      toast.warn('Please enter a number between 1 and 100.');
      return;
    }

    // Convert the input to a number
    const guess = Number(numberInput);

    // Validate if the parsed guess is a number and within the range 1-100
    if (isNaN(guess) || guess < 1 || guess > 100) {
      toast.warn('Please enter a valid number between 1 and 100.');
      return;
    }

    // Check if the guess matches the random number
    if (guess === randomNumber) {
      showWinAlert(); // Display win message
      // Reset the random number for a new round
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
    } else {
      showLostAlert(); // Display loss message
    }

    // Clear the input field after each guess
    setNumberInput('');
  };

  /**
   * Displays a success toast message when the user wins.
   */
  const showWinAlert = () => {
    toast.success(
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <FaTrophy style={{ marginRight: 8, fontSize: 24, color: '#FFD700' }} />
        <strong>Congratulations! You won!</strong>
      </span>,
      {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#d4edda',
          color: '#155724',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #c3e6cb',
        },
      }
    );
  };

  /**
   * Displays an error toast message when the user loses.
   */
  const showLostAlert = () => {
    toast.error(
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <FaSadTear style={{ marginRight: 8, fontSize: 24, color: '#FF6347' }} />
        <strong>Sorry, you lost. Try again!</strong>
      </span>,
      {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#f8d7da',
          color: '#721c24',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #f5c6cb',
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Guess the Number!</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          I'm thinking of a number between 1 and 100. Can you guess it?
        </p>
        <form onSubmit={guessNumber}>
          <div className="mb-6">
            <label htmlFor="guess-input" className="block text-gray-700 font-semibold mb-2">
              Enter your guess (1-100):
            </label>
            <input
              id="guess-input"
              type="number"
              min={1}
              max={100}
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-200 ease-in-out text-lg"
              placeholder="Your guess"
              aria-label="Number Guess Input"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit Guess
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuessAndWin;