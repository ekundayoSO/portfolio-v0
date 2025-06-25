import React from 'react';
import { toast } from 'react-toastify';
import { FaTrophy, FaSadTear } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const GuessAndWin = () => {
    const [numberInput, setNumberInput] = React.useState<number>(0);

    const guessNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if (numberInput) {
            const guess = parseInt(numberInput.toString(), 10);
            if (guess === randomNumber) {
                showWinAlert();
                
            } else {
                showLostAlert();
            }
        }
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
        <h1>Guess a number and win!
            <input
                type="number"
                value={numberInput}
                onChange={(e) => setNumberInput(Number(e.target.value))}
            />
            <button onClick={guessNumber}>Guess</button>
        </h1>
    </div>
  )
}

export default GuessAndWin;