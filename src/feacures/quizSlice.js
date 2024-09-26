import { createSlice } from "@reduxjs/toolkit";
const quizQuestions = {
  questions: [
    {
      question:
        "Do you believe that strength training can help you lose weight effectively?",
      options: [
        { answer: "Yes", value: 1 },
        { answer: "No", value: 0 },
        { answer: "Not Sure", value: 0.5 },
      ],
      select: null,
      suggestion:
        "Strength training can boost your metabolism and help with fat loss.",
    },
    {
      question:
        "If there was a 10-minute workout plan that could fit into your busy schedule, would you commit to it?",
      options: [
        { answer: "Absolutely", value: 1 },
        { answer: "Possibly", value: 0.5 },
        { answer: "Not Sure", value: 0 },
      ],
      select: null,
      suggestion: "Short, high-intensity workouts can be very effective!",
    },
    {
      question:
        "Are you open to trying new fitness trends to enhance your workout routine?",
      options: [
        { answer: "Yes, definitely", value: 1 },
        { answer: "Maybe, depends on the trend", value: 0.5 },
        {
          answer: "No, I prefer sticking to what I know",
          value: 0,
        },
      ],
      select: null,
      suggestion:
        "Exploring new trends can keep your routine exciting and effective.",
    },
    {
      question:
        "Do you think that a balanced diet is just as important as exercise for achieving your fitness goals?",
      options: [
        { answer: "Yes, they go hand in hand", value: 1 },
        {
          answer: "No, exercise is more important",
          value: 0,
        },
        { answer: "Not Sure", value: 0.5 },
      ],
      select: null,
      suggestion: "A balanced diet fuels your workouts and aids recovery.",
    },
    {
      question:
        "Would you consider joining a fitness community to stay motivated and accountable?",
      options: [
        { answer: "Yes, I would love that", value: 1 },
        {
          answer: "Maybe, I need more information",
          value: 0.5,
        },
        {
          answer: "No, I prefer working out alone",
          value: 0,
        },
      ],
      select: null,
      suggestion:
        "Being part of a community can provide support and encouragement.",
    },
  ],
  score: 0,
};
const quizSlice = createSlice({
  name: "quizAnswer",
  initialState: quizQuestions,
  reducers: {
    answer(state, action) {
      const updatedQuestions = state.questions.map((question, index) =>
        index === action.payload.index ? action.payload.question : question
      );
      return { ...state, questions: updatedQuestions };
    },
    score(state, action) {
      return { ...state, score: action.payload };
    },
  },
});

export const { answer, score } = quizSlice.actions;
export default quizSlice.reducer;
