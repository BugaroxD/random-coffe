import React, { useState } from "react";
import { Button } from "react-bootstrap";

const names = ["Jefferson", "Guilherme", "Vito", "Nilson", "Tony", "Elton"];

function RandomDraw() {
  const [winner, setWinner] = useState("");
  const [usedNames, setUsedNames] = useState([]);
  const reset = () => {
    setUsedNames([]);
    setWinner(null);
  };
  const handleClick = () => {
    let remainingNames = names.filter((name) => !usedNames.includes(name));
    if (remainingNames.length === 0) {
      remainingNames = names;
      reset();
    } else {
      let randomIndex = Math.floor(Math.random() * remainingNames.length);
      let randomName = remainingNames[randomIndex];
      setWinner(randomName);
      setUsedNames([...usedNames, randomName]);
    }
  };

  console.log(winner);

  return (
    <div>
      <Button variant="primary" onClick={handleClick}>
        Que os jogos comecem!
      </Button>
      {winner ? (
        <p className="text-center my-3">
          E o escolhido foi você <strong>{winner}</strong>
        </p>
      ) : (
        <p className="text-center my-3">
          <strong>
            Recomecem os jogos, todos os participante já foram selecionados
          </strong>
        </p>
      )}
    </div>
  );
}

export default RandomDraw;
