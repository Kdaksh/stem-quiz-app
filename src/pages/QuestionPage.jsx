import { useState } from "react";
import QuizLoadTimer from "../components/QuizLoadTimer";
import Question from "../components/Question";
const QuestionPage = ({ toggleQuiz }) => {
  let [showQues, setShowQues] = useState(false);
  let [quizTimer, setQuizTimer] = useState(true);
  let [quesId, setQuesId] = useState(0);
  
  const toggleQuizTimer = () => {if (!quizTimer) {setQuizTimer(true);setShowQues(false);} else {setQuizTimer(false);setShowQues(true);}};
  const nextQuestion = () => {setQuizTimer(true);setShowQues(false);setQuesId(quesId + 1);};

  return (
    <>
      <div className="quizArea">
        <QuizLoadTimer show={quizTimer} toggleQuizTimer={toggleQuizTimer} />
        <Question toggleQuiz={toggleQuiz}  show={showQues} toggleQuizTimer={toggleQuizTimer} nextQuestion={nextQuestion} quesId={quesId}/>
      </div>
    </>
  );
};
export default QuestionPage;
