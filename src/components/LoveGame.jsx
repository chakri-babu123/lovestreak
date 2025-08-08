import React, { useState } from 'react';
import './css/LoveGame.css';
import { Heart } from 'lucide-react';
import Confetti from 'react-confetti';

const rewards = [
  'Send 10 "I love you" messages on WhatsApp 💌',
  'Post winner name on Instagram story 💖',
  'Give 10 kisses on WhatsApp 😘',
  'Romantic movie night 🍿',
  'Plan a surprise date 💐',
  'Instagram shoutout with cute selfie 📸',
  'One whole day as a slave 😅',
  'Make breakfast for the partner 🥞',
  'Romantic voice note every hour ⏰',
  'Winner chooses next date spot 🌇'
];

const winningCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // main diagonal
  [2, 4, 6]  // anti-diagonal
];

const LoveGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [reward, setReward] = useState('');
  const [strikeClass, setStrikeClass] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result.symbol);
      setReward(rewards[Math.floor(Math.random() * rewards.length)]);
      setStrikeClass(getStrikeClass(result.combo));
      setShowConfetti(true);
    } else if (!newBoard.includes(null)) {
      setWinner('Draw');
    }
  };

  const checkWinner = (board) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { symbol: board[a], combo };
      }
    }
    return null;
  };

  const getStrikeClass = (combo) => {
    const patterns = {
      '0,1,2': 'strike-row-1',
      '3,4,5': 'strike-row-2',
      '6,7,8': 'strike-row-3',
      '0,3,6': 'strike-col-1',
      '1,4,7': 'strike-col-2',
      '2,5,8': 'strike-col-3',
      '0,4,8': 'strike-diag-1',
      '2,4,6': 'strike-diag-2'
    };
    return patterns[combo.toString()] || '';
  };

  const handleRematch = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
    setReward('');
    setStrikeClass('');
    setShowConfetti(false);
  };

  const renderSquare = (index) => (
    <div
      key={index}
      className={`square ${board[index] ? 'filled' : ''}`}
      onClick={() => handleClick(index)}
    >
      {board[index] === 'X' ? (
        <span className="x-icon">X</span>
      ) : board[index] === 'O' ? (
        <Heart className="heart-icon" size={36} color="red" fill="red" />
      ) : ''}
    </div>
  );

  return (
    <div className="love-game-container">
        <div className="fireworks-container">
      {showConfetti && <Confetti numberOfPieces={300} recycle={false}  />}
        </div>
      <h2 className="game-title">❤️ Tic Tac Love Game 💘</h2>
      <div className="grid-wrapper">
        <div className="grid">
          {board.map((_, index) => renderSquare(index))}
          {strikeClass && <div className={`strike ${strikeClass}`}></div>}
        </div>
      </div>

      {winner && (
        <div className="result-box">
          {winner === 'Draw' ? (
            <h3>It's a Draw! 🤝</h3>
          ) : (
            <>
              <h3>{winner} Wins! 🎉</h3>
              <p className="reward">Reward: {reward}</p>
            </>
          )}
          <button className="rematch-btn" onClick={handleRematch}>Rematch 🔁</button>
        </div>
      )}
    </div>
  );
};

export default LoveGame;
