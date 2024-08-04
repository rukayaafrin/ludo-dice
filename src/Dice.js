import React, { useState } from 'react';
import { Container } from '@mui/material';
import './Dice.css';

const Dice = () => {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(newNumber);
  };

  return (
    <Container>
      <div className={`dice dice-${number}`} onClick={rollDice}>
        {Array.from({ length: number }).map((_, idx) => (
          <div key={idx} className="dot"></div>
        ))}
      </div>
    </Container>
  );
};

export default Dice;
