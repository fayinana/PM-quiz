/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProgressBar from "../ui/ProgressBar";
import SelectButton from "../ui/SelectButton";
import Title from "../ui/Title";
import Question from "./../ui/Question";
import Container from "./Container";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answer, score } from "../feacures/quizSlice";
import { IoFitness } from "react-icons/io5";
import Plan from "../ui/Plan";

const plans = {
  high: [
    " Weekly Plan: 4 days of strength training, 2 days of cardio, 1 rest day",
    "Include High-Intensity Interval Training (HIIT) sessions",
    "Diverse workout routines to keep things interesting",
    "Regular check-ins with a fitness community for support",
  ],

  medium: [
    "Weekly Plan: 3 days of strength training, 2 days of cardio, 2 rest days",
    "Incorporate some HIIT or circuit training",
    "Occasionally try new fitness trends for variety",
    "Balanced diet to complement workout efforts",
  ],
  low: [
    "Weekly Plan: 2 days of strength training, 2 days of cardio, 3 rest days",
    "Keep workouts short and manageable, like 10-minute high-intensity sessions",
    "Stick to familiar routines",
    "Focus on diet and easy-to-maintain nutrition",
  ],
};
let assist;

function QuestionContainer({ questions }) {
  const [index, setIndex] = useState(0);
  const question = questions[index];
  const dispatch = useDispatch();
  const scoreValue = useSelector((state) => state.quiz.score);
  const [progress, setProgress] = useState(0);
  function handleNext() {
    if (index >= questions.length) {
      setIndex((index) => index);
    } else {
      setIndex((index) => index + 1);
    }
  }
  function handlePrev() {
    if (index === 0) {
      setIndex((index) => index);
    } else {
      setIndex((index) => index - 1);
    }
  }
  function handleSelect(i) {
    if (question.select === null) {
      setProgress((progress) => progress + 1);
    }
    const updatedQuestion = { ...question, select: i };
    dispatch(answer({ index: index, question: updatedQuestion }));
  }
  function handleAdd() {
    const currentScore = questions.reduce((cur, acc) => {
      return cur + Number(acc.options[acc.select].value);
    }, 0);
    dispatch(score(currentScore));
  }
  return (
    <Container>
      <Title />
      {!scoreValue && (
        <ProgressBar progress={progress * (100 / questions?.length)} />
      )}
      <Question question={question.question} suggestion={question.suggestion} />

      {scoreValue ? (
        scoreValue >= 4 ? (
          (assist = plans.high.map((a, index) => (
            <Plan key={index} index={index} plans={plans.high}>
              {a}
            </Plan>
          )))
        ) : scoreValue >= 2 ? (
          (assist = plans.medium.map((a, index) => (
            <Plan key={index} index={index} plans={plans.medium}>
              {a}
            </Plan>
          )))
        ) : (
          (assist = plans.low.map((a, index) => (
            <Plan key={index} index={index} plans={plans.low}>
              {a}
            </Plan>
          )))
        )
      ) : (
        <>
          {question.options.map((option, index) => (
            <SelectButton
              key={index}
              onClick={() => handleSelect(index)}
              isCorrect={question.select === index}
            >
              {option.answer}
            </SelectButton>
          ))}
          <div className="border-t-[1px] relative left-0 bottom-0 w-full flex items-center justify-between px-8 pt-4">
            <button onClick={handlePrev}>
              <IoIosArrowBack />
            </button>

            <p>{index + 1}/5</p>
            {index === questions.length - 1 ? (
              <button
                onClick={handleAdd}
                disabled={progress !== questions.length}
                className="px-4 py-2 from-pink-500 via-purple-500 to-indigo-500  rounded-md text-white tracking-wide capitalize bg-gradient-to-r "
              >
                submit
              </button>
            ) : (
              <button onClick={handleNext}>
                <IoIosArrowForward />
              </button>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export default QuestionContainer;
