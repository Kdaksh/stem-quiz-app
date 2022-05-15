import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Modal, Button } from "react-bootstrap";
import Questions from "../question.jsx";
import{ useEffect} from "react"
import "../assets/styles/questions.css"
import ResultScreen from "./resultScreen.jsx";
import {BsPauseCircleFill as BsPause,BsArrowLeftCircleFill as BsArrowReturnLeft} from "react-icons/bs";
import { useState } from "react"
const Question = ({show,toggleQuizTimer,nextQuestion,quesId,toggleQuiz}) => {

  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
  let { question, options, section, answer, id } = Questions[quesId];
  let [playTimer, setPlayTimer] = useState(true);
  let [result, setResult] = useState(false);
  let [resultData, setResultData] = useState(null);
  let [pause, setPause] = useState(false);
  let [exitToggle, setExitToggle] = useState(false);

  useEffect(() => {window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches( e.matches ));}, []);
  
  const toggleTimer = (e) => {if (!playTimer) {setPlayTimer(true);} else setPlayTimer(false);};
  const checkAnswer = (i) => {toggleTimer();if (i === answer) {setResultData({result: "Pass",bg: "pass",text: "Congratulations!, That Was The Right Answer"});} else {setResultData({result: "Fail",bg: "fail",text: "Oops!, That Was The Wrong Answer"});}setResult(true);};
  return (
    <>
      {show ? (
        <>
          {pause ? (<div className="pauseScreen"><BsPause onClick={() => {setPause(false);toggleTimer();}} /></div>) : null}
          {result ? (<ResultScreen toggleQuiz={toggleQuiz} data={resultData} id={id} nextQuestion={nextQuestion} toggleTimer={toggleTimer} setResult={setResult}/>) : null}{" "}
          <div className="questionArea">
            <>
              <div className="questionTop">
                <span><b>Topic:</b> {section}</span>
                <span className="text-right">Question <b>{quesId + 1} Of 10</b></span>
              </div>
              <div className="question">{question} </div>
              <div className="options">
                <div className="rowOpt">
                  {options.map((e, i) => { if (i > 1) {return null;} else return (<><div className="option" onClick={() => {checkAnswer(i + 1);}}>{e}</div></>);})}
                </div>
                <div className="rowOpt">
                  {options.map((e, i) => {if (i > 1) {return (<><div className="option" onClick={() => {checkAnswer(i + 1);}}>{e}</div></>);} else {return null}})}
                </div>
              </div>
            </>

            <div className="questionBottom">
              <div>
                <BsArrowReturnLeft onClick={() => {setExitToggle(true);setPlayTimer(false);}} className="icon"/>
                <BsPause onClick={() => {toggleTimer();setPause(true);}}className="icon"/>
              </div>
            </div>
          </div>
          <div className="quesTimer">
            <CountdownCircleTimer
              isPlaying={playTimer}
              duration={30}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[30, 20, 10, 0]}
              className="timer"
              onComplete={() => {setResultData({result: "Fail",bg: "fail",text: "Oops! You Missed A Question"});toggleTimer();setResult(true);}}
              size={matches? 90 : 60}
              strokeWidth={matches? 10 : 7}>
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </>
      ) : null}
      {exitToggle ? (
        <>
          <Modal variant="" show style={{ backdropFilter: "blur(20px)" }}>
            <Modal.Header>
              <Modal.Title>Are You Sure You Want To Quit The Quiz?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => {setPlayTimer(true);setExitToggle(false);}}>
                Close
              </Button>
              <Button variant="primary" onClick={toggleQuiz}>
                Quit
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : null}
    </>
  );
};
export default Question;
