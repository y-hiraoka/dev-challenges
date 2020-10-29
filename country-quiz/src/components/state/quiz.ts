import React from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { Country } from "../../models/country";
import { randomInt } from "../../utils/randomInt";
import { sampleWithoutReplacement } from "../../utils/sampleWithoutReplacement";
import { countriesValue } from "./countries";

const quizResultCountAtom = atom({
  key: "QuizResultCountState",
  default: 0,
});

export const useQuizResultCount = () => {
  const quizResultCount = useRecoilValue(quizResultCountAtom);

  return { quizResultCount };
};

const quizPhaseAtom = atom<"quiz" | "answerCheck" | "result">({
  key: "QuizPhaseState",
  default: "quiz",
});

export const useQuizPhase = () => {
  return useRecoilValue(quizPhaseAtom);
};

type Quiz = {
  type: "FLAG" | "CAPITAL";
  countries: FixedLengthTuple<Country, 4>;
  currectAnswerIndex: 0 | 1 | 2 | 3;
};

export const useQuiz = () => {
  const countries = useRecoilValue(countriesValue);
  const setQuizPhase = useSetRecoilState(quizPhaseAtom);
  const setQuizResultCount = useSetRecoilState(quizResultCountAtom);

  const [selectedIndex, setSelectedIndex] = React.useState<0 | 1 | 2 | 3>();

  const randomlyGetCountries = React.useCallback(
    () => sampleWithoutReplacement({ list: countries, length: 4 }),
    [countries],
  );

  const [quiz, setQuiz] = React.useState<Quiz>({
    type: "CAPITAL",
    countries: randomlyGetCountries(),
    currectAnswerIndex: randomInt(4) as any,
  });

  const setNextQuiz = React.useCallback(() => {
    setQuiz(prev => ({
      type: prev.type === "FLAG" ? "CAPITAL" : "FLAG",
      countries: randomlyGetCountries(),
      currectAnswerIndex: randomInt(4) as any,
    }));
  }, [randomlyGetCountries]);

  const answer = React.useCallback(
    (index: 0 | 1 | 2 | 3) => {
      setSelectedIndex(index);
      setQuizPhase("answerCheck");
    },
    [setQuizPhase],
  );

  const goToNextStep = React.useCallback(() => {
    if (quiz.currectAnswerIndex === selectedIndex) {
      setNextQuiz();
      setQuizPhase("quiz");
      setQuizResultCount(prev => prev + 1);
    } else {
      setQuizPhase("result");
    }
  }, [
    quiz.currectAnswerIndex,
    setQuizPhase,
    setNextQuiz,
    setQuizResultCount,
    selectedIndex,
  ]);

  return { quiz, answer, goToNextStep, selectedIndex };
};

export const useQuizRestarter = () => {
  const setQuizPhase = useSetRecoilState(quizPhaseAtom);
  const setQuizResultCount = useSetRecoilState(quizResultCountAtom);

  const restart = React.useCallback(() => {
    setQuizPhase("quiz");
    setQuizResultCount(0);
  }, [setQuizPhase, setQuizResultCount]);

  return restart;
};
