import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const names = ["Jefferson", "Guilherme", "Vito", "Nilson", "Tony", "Elton"];

function RandomDraw() {
  const [winner, setWinner] = useState('');
  const [usedNames, setUsedNames] = useState([]);

  const handleClick = () => {
    let remainingNames = names.filter(name => !usedNames.includes(name));
    if (remainingNames.length === 0) {
      remainingNames = names;
      setUsedNames([]);
    }

    const randomIndex = Math.floor(Math.random() * remainingNames.length);
    setWinner(remainingNames[randomIndex]);
    setUsedNames([...usedNames, remainingNames[randomIndex]]);
  }

  return (
    <div>
      <Button variant="primary" onClick={handleClick}>Que os jogos comecem!</Button>
      {winner && <p className="text-center my-3">E o escolhido foi você <strong>{winner}</strong></p>}
    </div>
  );
}

export default RandomDraw;