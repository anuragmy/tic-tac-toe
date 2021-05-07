import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { calculateWinner, initialArray } from "../../utility";

import "./Board.css";

const Board = ({ getWinner }) => {
  const [board, setBoard] = useState(initialArray);
  const [isNext, setIsNext] = useState("X");
  const [winner, setWinner] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [winningIndexes, setWinnigIndexes] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const showMessage = () => (
    <Snackbar
      open
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={messageType}> {message} </Alert>
    </Snackbar>
  );

  const handleClear = () => {
    setBoard(initialArray);
    setWinner(undefined);
    setWinnigIndexes([]);
    setOpen(false);
  };

  const handleClick = (i) => {
    let nextTurn = isNext;
    let board_copy = [...board];

    if (!board_copy[i] && !winner) {
      board_copy[i] = nextTurn;
      const isWinner = calculateWinner(board_copy);
      if (isWinner) {
        getWinner(isWinner.winnerType);
        setWinner(isWinner.winnerType);
        setWinnigIndexes(isWinner.indexes);
        setMessage(`Winner is ${isWinner.winnerType}`);
        setMessageType("success");
        setOpen(!open);
      }
      nextTurn = isNext === "X" ? "O" : "X";
      setIsNext(nextTurn);
      setBoard(board_copy);
    }
  };

  return (
    <>
      <h2>Player Turn : {isNext}</h2>
      <div className="board">
        {board.map((item, i) => (
          <div
            className="cell"
            key={i}
            data-cell
            onClick={() => handleClick(i)}
            style={{
              background:
                winningIndexes.length && winningIndexes.includes(i)
                  ? "lightgreen"
                  : "white",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="contained" onClick={handleClear}>
          Play again
        </Button>
        {open && showMessage()}
      </div>
    </>
  );
};

export default Board;
