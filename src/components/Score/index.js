/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Score = ({ winner }) => {
  const [xCount, setXCount] = useState(0);
  const [oCount, setOCount] = useState(0);

  useEffect(() => {
    if (winner.type === "X") {
      setXCount(xCount + 1);
    } else if (winner.type === "O") {
      setOCount(oCount + 1);
    }
  }, [winner]);

  useEffect(() => {}, [xCount, oCount]);

  const handleClear = () => {
    setXCount(0);
    setOCount(0);
  };

  return (
    <>
      <h2> Score Board </h2>
      <br />
      <TableContainer
        component={Paper}
        style={{ width: 200, margin: " 0 auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">X</TableCell>
              <TableCell align="center">O</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{xCount}</TableCell>
              <TableCell align="center">{oCount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <Button variant="contained" onClick={handleClear}>
        Reset Scores
      </Button>
    </>
  );
};

export default Score;
