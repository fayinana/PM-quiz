import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./feacures/quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
  },
});
