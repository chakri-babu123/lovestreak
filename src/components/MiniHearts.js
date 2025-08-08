import React from 'react';
import './css/MiniHearts.css';

const colors = ['#ffc0cb', '#ffb6c1', '#ffe4e1']; // baby pink, pink, pale pink

const MiniHearts = () => {
  const hearts = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    size: Math.random() * 10 + 10, // 10px to 20px
    left: Math.random() * 100, // percent
    delay: Math.random() * 10, // seconds
    duration: Math.random() * 6 + 6, // 6s to 12s
    color: colors[Math.floor(Math.random() * colors.length)],
    direction: Math.random() > 0.5 ? 'left' : 'right',
  }));

  return (
    <div className="heart-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`heart ${heart.direction}`}
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            backgroundColor: heart.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default MiniHearts;
