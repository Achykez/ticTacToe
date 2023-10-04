import { useEffect, useState } from "react";
import "./App.css";
import { generateBoard, checkForWin } from "./utils/functions";
import {
  playerText,
  rowStyle,
  cellStyle,
  buttonContainerStyle,
  formStyle,
  inputStyle,
  Container,
} from "./styles";

function App() {
  const [rowNumber, setRowNumber] = useState(0);
  const [board, setBoard] = useState(generateBoard(rowNumber));
  const [currPlayer, setCurrPlayer] = useState("x");
  const [winner, setWinner] = useState(false);
  const [playerX, setPlayerX] = useState("");
  const [playerY, setPlayerY] = useState("");
  const [players, setPlayers] = useState(true);

  useEffect(() => {
    setBoard(generateBoard(rowNumber));
  }, [rowNumber]);

  const handleClick = (row: number, cell: number) => {
    if (board[row][cell] === undefined) {
      board[row][cell] = currPlayer;
      setBoard([...board]);
      if (checkForWin(board)) {
        setWinner(true);
      } else {
        setCurrPlayer(currPlayer === "x" ? "o" : "x");
      }
    }
  };

  const handleStartGame = (event: React.FormEvent) => {
    event.preventDefault();
    if (playerX && playerY && rowNumber >= 3) {
      setPlayers(false);
    }
  };

  const gameReset = () => {
    setBoard(generateBoard(rowNumber));
    setWinner(false);
    setCurrPlayer("x");
  };

  const restartGame = () => {
    setBoard(generateBoard(rowNumber));
  };

  const resetGame= () => {
    setPlayers(true);
    setPlayerX("");
    setPlayerY("");
    setRowNumber(0);
  }

  const playerID = currPlayer === "x" ? playerX : playerY;
  return !winner ? (
    <>
      {players ? (
        <form style={formStyle} action="" onSubmit={handleStartGame}>
          <input
            type="text"
            style={inputStyle}
            placeholder="Enter Player X name"
            name="playerX"
            value={playerX}
            onChange={(e) => setPlayerX(e.target.value)}
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="Enter Player O name"
            name="playerY"
            value={playerY}
            onChange={(e) => setPlayerY(e.target.value)}
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="Enter number of rows"
            name="rowNumber"
            value={rowNumber}
            onChange={(e) => {
              const inputText = e.target.value;
              const numbersOnly = inputText.replace(/[^0-9]/g, "");
              setRowNumber(parseInt(numbersOnly));
            }}
          />
          <button type="submit">Start game</button>
        </form>
      ) : (
        <>
          <div style={Container}>
            <p style={playerText}>
              <span style={{ color: currPlayer === 'x' ? 'purple' : 'greenyellow' }}>{`${playerID}'s`}</span> turn
            </p>
            <button onClick={restartGame}>Restart Game</button>
            <button style={{color: 'red'}} onClick={resetGame}>Reset Game</button>
          </div>

          {board.map((row, r) => (
            <div key={r} style={rowStyle}>
              {row.map((cell, c) => (
                <div
                  onClick={() => handleClick(r, c)}
                  key={c}
                  style={{
                    ...cellStyle,
                    color: cell === "x" ? "blue" : "yellow",
                  }}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </>
  ) : (
    <>
      <p style={playerText}>{playerID} wins</p>
      <div style={buttonContainerStyle}>
        <button onClick={() => gameReset()}>play a new game</button>
      </div>
    </>
  );
}
export default App;
