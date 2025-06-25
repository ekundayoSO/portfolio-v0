import React from 'react';
import { toast } from 'react-toastify';
import { FaTrophy, FaSadTear } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const GuessAndWin = () => {
    const [numberInput, setNumberInput] = React.useState<string>("");
    const [randomNumber, setRandomNumber] = React.useState<number>(() => Math.floor(Math.random() * 100) + 1);

    const guessNumber = () => {
        if (!numberInput) {
            toast.warn("Please enter a number between 1 and 100.");
            return;
        }
        const guess = parseInt(numberInput, 10);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            toast.warn("Please enter a valid number between 1 and 100.");
            return;
        }
        if (guess === randomNumber) {
            showWinAlert();
            setRandomNumber(Math.floor(Math.random() * 100) + 1); // Reset for next round
        } else {
            showLostAlert();
        }
        setNumberInput(""); // Clear input after guess
    }

    // Call this function when the user wins
    const showWinAlert = () => {
        toast.success(
            <span>
                <FaTrophy style={{ color: '#FFD700', marginRight: 8, fontSize: 24 }} />
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
            }
        );
    };

    // Call this function when the user loses
    const showLostAlert = () => {
        toast.error(
            <span>
                <FaSadTear style={{ color: '#FF6347', marginRight: 8, fontSize: 24 }} />
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
            }
        );
    };

  return (
    <div>
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Guess a Number and Win!
          </h1>
          <div className="mb-4">
            <label htmlFor="guess-input" className="block text-gray-700 font-medium mb-2">
            Enter your guess (1-100):
            </label>
            <input
            id="guess-input"
            type="number"
            min={1}
            max={100}
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your guess"
            />
          </div>
          <button
            onClick={guessNumber}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Submit Guess
          </button>
        </div>
    </div>
  )
}

export default GuessAndWin;