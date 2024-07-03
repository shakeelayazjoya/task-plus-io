// Counter.js
import React, { useState, useEffect } from 'react';

function Counter({ value, durationInSeconds }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const totalCount = value;
    const interval = setInterval(() => {
      setCount(prevCount => {
        const increment = totalCount / (durationInSeconds * 1000 / 100);
        const nextCount = Math.min(prevCount + increment, totalCount);
        if (nextCount >= totalCount) {
          clearInterval(interval); // Clear the interval when count reaches the limit
        }
        return nextCount;
      });
    }, 10); // Adjusted interval duration for smoother animation

    return () => clearInterval(interval);
  }, [value, durationInSeconds]);

  return (
    <span className="counter">{Math.round(count)}</span>
  );
}

export default Counter;
