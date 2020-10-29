import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useQuiz, useQuizPhase } from "../../state/quiz";
import { QuizCard } from "../../molecules/QuizCard";
import { Button } from "../../atoms/Button";
import { Question } from "./Question";
import { Choices } from "../../molecules/Choices";
import { useRecoilValue } from "recoil";

const useStyles = makeStyles(theme => ({
  question: {},
  choicesContainer: {
    display: "grid",
    gap: "2rem",
    marginTop: "3rem",
    gridTemplateColumns: "100%",
  },
  chilces: {},
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

type ContainerProps = {};

type Variant = React.ComponentProps<typeof Choices>["variant"];

type ComponentProps = {
  capitalName?: string;
  nationalFlag?: string;
  choicesALabel: string;
  choicesBLabel: string;
  choicesCLabel: string;
  choicesDLabel: string;
  onClickA: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickB: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickC: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickD: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variantA: Variant;
  variantB: Variant;
  variantC: Variant;
  variantD: Variant;
  disabledAll: boolean;
  showNextButton: boolean;
  onClickNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & ContainerProps;

const Component: React.FCX<ComponentProps> = props => {
  const classes = useStyles();
  return (
    <QuizCard showPicture>
      <Question
        className={classes.question}
        capitalName={props.capitalName}
        nationalFlag={props.nationalFlag}
      />
      <div className={classes.choicesContainer}>
        <Choices
          label="A"
          variant={props.variantA}
          onClick={props.onClickA}
          disabled={props.disabledAll}>
          {props.choicesALabel}
        </Choices>
        <Choices
          label="B"
          variant={props.variantB}
          onClick={props.onClickB}
          disabled={props.disabledAll}>
          {props.choicesBLabel}
        </Choices>
        <Choices
          label="C"
          variant={props.variantC}
          onClick={props.onClickC}
          disabled={props.disabledAll}>
          {props.choicesCLabel}
        </Choices>
        <Choices
          label="D"
          variant={props.variantD}
          onClick={props.onClickD}
          disabled={props.disabledAll}>
          {props.choicesDLabel}
        </Choices>
        {props.showNextButton && (
          <div className={classes.button}>
            <Button variant="fulfilled" onClick={props.onClickNext}>
              Next
            </Button>
          </div>
        )}
      </div>
    </QuizCard>
  );
};

const Container: React.FCX<ContainerProps> = props => {
  const { quiz, answer, goToNextStep, selectedIndex } = useQuiz();
  const phase = useQuizPhase();

  const choiceA = React.useCallback(() => answer(0), [answer]);
  const choiceB = React.useCallback(() => answer(1), [answer]);
  const choiceC = React.useCallback(() => answer(2), [answer]);
  const choiceD = React.useCallback(() => answer(3), [answer]);

  const variantA: Variant =
    phase === "quiz"
      ? "none"
      : phase === "answerCheck" && quiz.currectAnswerIndex === 0
      ? "correct"
      : phase === "answerCheck" && selectedIndex === 0
      ? "incorrect"
      : "none";

  const variantB: Variant =
    phase === "quiz"
      ? "none"
      : phase === "answerCheck" && quiz.currectAnswerIndex === 1
      ? "correct"
      : phase === "answerCheck" && selectedIndex === 1
      ? "incorrect"
      : "none";

  const variantC: Variant =
    phase === "quiz"
      ? "none"
      : phase === "answerCheck" && quiz.currectAnswerIndex === 2
      ? "correct"
      : phase === "answerCheck" && selectedIndex === 2
      ? "incorrect"
      : "none";

  const variantD: Variant =
    phase === "quiz"
      ? "none"
      : phase === "answerCheck" && quiz.currectAnswerIndex === 3
      ? "correct"
      : phase === "answerCheck" && selectedIndex === 3
      ? "incorrect"
      : "none";

  return (
    <Component
      {...props}
      capitalName={
        quiz.type === "CAPITAL" ? quiz.countries[quiz.currectAnswerIndex].capital : undefined
      }
      nationalFlag={
        quiz.type === "FLAG" ? quiz.countries[quiz.currectAnswerIndex].flag : undefined
      }
      onClickA={choiceA}
      onClickB={choiceB}
      onClickC={choiceC}
      onClickD={choiceD}
      choicesALabel={quiz.countries[0].name}
      choicesBLabel={quiz.countries[1].name}
      choicesCLabel={quiz.countries[2].name}
      choicesDLabel={quiz.countries[3].name}
      variantA={variantA}
      variantB={variantB}
      variantC={variantC}
      variantD={variantD}
      disabledAll={phase === "answerCheck" || phase === "result"}
      showNextButton={phase === "answerCheck"}
      onClickNext={goToNextStep}
    />
  );
};

export { Container as Quiz };
