import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const GuessAndWin = () => {
  const [numberInput, setNumberInput] = React.useState<string>('');
  const [randomNumber, setRandomNumber] = React.useState<number>(() => Math.floor(Math.random() * 15) + 1);
  const [showRandom, setShowRandom] = React.useState<boolean>(false);

  const guessNumber = () => {
    setShowRandom(true);

    if (!numberInput) {
      toast.warn('Please enter a number between 1 and 15.');
      return;
    }

    const guess = parseInt(numberInput, 10);

    if (isNaN(guess) || guess < 1 || guess > 15) {
      toast.warn('Please enter a valid number between 1 and 15.');
      return;
    }

    if (guess === randomNumber) {
      showWinAlert();
      setRandomNumber(Math.floor(Math.random() * 15) + 1);
      setShowRandom(false); // Hide after win and reset
    } else {
      showLostAlert();
    }

    setNumberInput('');
  };

  const showWinAlert = () => {
    toast.success(
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: 8, fontSize: 24 }}>🏆</span>
        <strong>Congratulations! You won!</strong>
      </span>,
      {
        position: 'top-center',
        autoClose: 5000,
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

  const showLostAlert = () => {
    toast.error(
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: 8, fontSize: 24 }}>😢</span>
        <strong>Sorry, you lost. Try again!</strong>
      </span>,
      {
        position: 'top-center',
        autoClose: 5000,
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
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-2xl w-full bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-400">Guess the Number!</h1>
        <p className="text-lg text-gray-300 mb-6 text-center">
          I'm thinking of a number between 1 and 15. Can you guess it?
        </p>
        {showRandom && (
          <div className="mt-6 text-center text-xl text-yellow-400 font-bold">The number was: {randomNumber}</div>
        )}
        <div className="mb-6">
          <label htmlFor="guess-input" className="block text-gray-300 font-semibold mb-2">
            Enter your guess (1-15):
          </label>
          <input
            id="guess-input"
            type="number"
            min={1}
            max={15}
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            className="w-full px-5 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200 ease-in-out text-lg bg-gray-700 text-gray-300"
            placeholder="Your guess"
            aria-label="Number Guess Input"
          />
        </div>
        <button
          onClick={guessNumber}
          className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit Guess
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default GuessAndWin;
