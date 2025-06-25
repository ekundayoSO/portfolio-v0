import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

// Main GuessAndWin component to encapsulate the game and ToastContainer
const GuessAndWin = () => {
  // State to store the user's number input
  const [numberInput, setNumberInput] = React.useState<string>('');
  // State to store the randomly generated number (between 1 and 15)
  const [randomNumber, setRandomNumber] = React.useState<number>(() => Math.floor(Math.random() * 15) + 1);

    // Effect to reset the random number when the component mounts
  const guessNumber = () => {
    // Check if the input field is empty
    if (!numberInput) {
      toast.warn('Please enter a number between 1 and 15.');
      return;
    }

    // Parse the input string to an integer
    const guess = parseInt(numberInput, 10);

    // Validate if the parsed guess is a number and within the range 1-15
    if (isNaN(guess) || guess < 1 || guess > 15) {
      toast.warn('Please enter a valid number between 1 and 15.');
      return;
    }

    // Check if the guess matches the random number
    if (guess === randomNumber) {
      showWinAlert(); // Display win message
      // Reset the random number for a new round
      setRandomNumber(Math.floor(Math.random() * 15) + 1);
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
        {/* Replaced FaTrophy with an emoji to avoid compilation issues */}
        <span style={{ marginRight: 8, fontSize: 24 }}>🏆</span>
        <strong>Congratulations! You won!</strong>
      </span>,
      {
        position: 'top-center', // Position the toast at the top center
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // Added some basic inline styling since external CSS import was removed
        style: {
          backgroundColor: '#d4edda', // Light green background
          color: '#155724', // Dark green text
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
        {/* Replaced FaSadTear with an emoji to avoid compilation issues */}
        <span style={{ marginRight: 8, fontSize: 24 }}>😢</span>
        <strong>Sorry, you lost. Try again!</strong>
      </span>,
      {
        position: 'top-center', // Position the toast at the top center
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // Added some basic inline styling since external CSS import was removed
        style: {
          backgroundColor: '#f8d7da', // Light red background
          color: '#721c24', // Dark red text
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
          I'm thinking of a number between 1 and 15. Can you guess it?
        </p>
        <div className="mb-6">
          <label htmlFor="guess-input" className="block text-gray-700 font-semibold mb-2">
            Enter your guess (1-15):
          </label>
          <input
            id="guess-input"
            type="number"
            min={1}
            max={15}
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-200 ease-in-out text-lg"
            placeholder="Your guess"
            aria-label="Number Guess Input"
          />
        </div>
        <button
          onClick={guessNumber}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit Guess
        </button>
      </div>
      {/* ToastContainer is essential for displaying the toast messages */}
      <ToastContainer />
    </div>
  );
};

export default GuessAndWin;
