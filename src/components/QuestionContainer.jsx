/* eslint-disable react/prop-types */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProgressBar from "../ui/ProgressBar";
import SelectButton from "../ui/SelectButton";
import Title from "../ui/Title";
import Question from "./../ui/Question";
import Container from "./Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { answer, score } from "../feacures/quizSlice";

function QuestionContainer({ questions }) {
  const [index, setIndex] = useState(0);
  const question = questions[index];
  const dispatch = useDispatch();
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
      <ProgressBar progress={(index + 1) * (100 / questions?.length)} />
      <Question question={question.question} suggestion={question.suggestion} />
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
          <button onClick={handleAdd}>submit</button>
        ) : (
          <button onClick={handleNext}>
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </Container>
  );
}

export default QuestionContainer;
