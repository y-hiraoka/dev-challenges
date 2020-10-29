import React from "react";
import backgroundImage from "./background.png";
import { makeStyles } from "@material-ui/styles";
import { QuizResult } from "./organisms/QuizResult";
import { Quiz } from "./organisms/Quiz";
import { useQuizPhase } from "./state/quiz";

const useStyles = makeStyles({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 2rem",
  },
  choices: {
    width: "100%",
    marginTop: "1rem",
  },
  pre: {
    width: "60rem",
  },
});

function App() {
  const classes = useStyles();

  const phase = useQuizPhase();

  return (
    <div className={classes.root}>
      <React.Suspense fallback={<div>Loading...</div>}>
        {phase === "result" ? <QuizResult /> : <Quiz />}
      </React.Suspense>
    </div>
  );
}

export default App;
