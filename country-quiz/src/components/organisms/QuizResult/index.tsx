import React from "react";
import { makeStyles } from "@material-ui/styles";
import { QuizCard } from "../../molecules/QuizCard";
import eyeCatch from "./undraw_winners_ao2o 2.svg";
import { Button } from "../../atoms/Button";
import {  useQuizRestarter, useQuizResultCount } from "../../state/quiz";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  eyeCatch: {
    width: "20rem",
  },
  heading: {
    marginTop: "5rem",
    fontSize: "4.5rem",
  },
  paragraph: {
    marginTop: "2.2rem",
    fontSize: "1.5rem",
  },
  resultCount: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.colors.success,
  },
  button: {
    marginTop: "6rem",
    width: "20rem",
  },
}));

type ContainerProps = {};

type ComponentProps = {
  resultCount: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ContainerProps;

const Component: React.FCX<ComponentProps> = props => {
  const classes = useStyles();

  return (
    <QuizCard>
      <div className={classes.container}>
        <img className={classes.eyeCatch} src={eyeCatch} alt="eye catch" />
        <h1 className={classes.heading}>Results</h1>
        <p className={classes.paragraph}>
          You got <span className={classes.resultCount}>{props.resultCount}</span> correct
          answers
        </p>
        <Button className={classes.button} variant="ghost" onClick={props.onClick}>
          Try Again
        </Button>
      </div>
    </QuizCard>
  );
};

const Container: React.FCX<ContainerProps> = props => {
  const { quizResultCount } = useQuizResultCount();
  const restart = useQuizRestarter();

  return <Component {...props} resultCount={quizResultCount} onClick={restart} />;
};

export { Container as QuizResult };
