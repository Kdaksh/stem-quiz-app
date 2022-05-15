import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import QuestionPage from "./pages/QuestionPage";
import QuizModal from "./components/QuizModal";
import "./assets/styles/media.css";
function App() {
  let [showQuiz, setShowQuiz] = useState(false);
  let [showModal, setShowModal] = useState(false);
  const ToggleQuizModal = () => {if (!showModal) {setShowModal(true);} else setShowModal(false);};
  const ToggleQuiz = () => { if (!showQuiz) {setShowQuiz(true);} else setShowQuiz(false);};

  return (
   
            <>
            <Nav/>
              {!showQuiz ? (
                <>
                  <Home ToggleQuizModal={ToggleQuizModal} />
                  <QuizModal show={showModal} ToggleQuizModal={ToggleQuizModal}  toggleQuiz={ToggleQuiz}/>
                </>
              ) :  <QuestionPage toggleQuiz={ToggleQuiz} />}
            </>
          
      
  );
}

export default App;
