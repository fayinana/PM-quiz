import About from "./screen/About";
import Banner from "./screen/Banner";
import Footer from "./screen/Footer";
import NewsPage from "./screen/NewsPage";
import QuestionPage from "./screen/QuestionPage";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Banner />
        <QuestionPage />
        <About />
        <NewsPage />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
