import { useSelector } from "react-redux";
import QuestionContainer from "../components/QuestionContainer";
import Section from "./../components/Section";
function QuestionPage() {
  const questions = useSelector((state) => state.quiz);

  return (
    <Section>
      <QuestionContainer questions={questions.questions} />
    </Section>
  );
}

export default QuestionPage;
