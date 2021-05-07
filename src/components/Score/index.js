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
  const [rows, setRows] = useState([{ id: 1, X: xCount, O: oCount }]);
  // eslint-disable-next-line
  useEffect(() => {
    if (winner === "X") {
      setXCount(xCount + 1);
      setRows([{ id: 1, X: xCount + 1, O: oCount }]);
    } else if (winner === "O") {
      setOCount(oCount + 1);
      setRows([{ id: 1, X: xCount, O: oCount + 1 }]);
    }
    return () => {};
  }, [winner]);

  const handleClear = () => {
    setRows([{ id: 1, X: 0, O: 0 }]);
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
            {rows.length > 0 &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.X}</TableCell>
                  <TableCell align="center">{row.O}</TableCell>
                </TableRow>
              ))}
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
