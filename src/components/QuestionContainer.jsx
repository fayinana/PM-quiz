import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProgressBar from "../ui/ProgressBar";
import SelectButton from "../ui/SelectButton";
import Title from "../ui/Title";
import Question from "./../ui/Question";
import Container from "./Container";

function QuestionContainer() {
  return (
    <Container>
      <Title />
      <ProgressBar progress={50} />
      <Question
        question="Do you think hours of cardio is beneficial for fat loss?"
        suggestion="Many people think doing cardio every day is the answer."
      />
      <SelectButton isCorrect={false}>no</SelectButton>
      <SelectButton isCorrect={true}>yes</SelectButton>
      <SelectButton isCorrect={false}>not sure</SelectButton>
      <div className="border-t-[1px] relative left-0 bottom-0 w-full flex items-center justify-between px-8 pt-4">
        <button>
          <IoIosArrowBack />
        </button>
        <p>1/5</p>
        <button>
          <IoIosArrowForward />
        </button>
      </div>
    </Container>
  );
}

export default QuestionContainer;
