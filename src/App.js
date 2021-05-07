import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import Board from "./components/Board";
import Score from "./components/Score";

const App = () => {
  const [winner, setWinner] = useState({ type: "" });
  // setting this as object so that child re-render
  // if if gets the same prop
  const getWinner = (type) => setWinner({ type });

  return (
    <Container style={{ textAlign: "center", marginTop: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Board getWinner={getWinner} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Score winner={winner} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
