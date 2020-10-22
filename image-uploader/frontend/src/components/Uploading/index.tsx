import React from "react";
import { LinearProgress, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "2.5rem 3.3rem",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gap: "2rem",
    width: "40rem",
  },
  text: { fontSize: "1.5rem" },
});

const Component: React.FCX = function (props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.text}>Uploading...</Typography>
      <LinearProgress />
    </Paper>
  );
};

export { Component as Uploading };
