import { Offcanvas } from "react-bootstrap";
import "../assets/styles/resultScreen.css";
import Confetti from "react-confetti";
import {BsExclamationCircleFill as ErrorBtn, BsArrowRightCircleFill as BtnRight, BsCheckCircle as TiTick, BsArrowLeftCircleFill as BtnLeft} from "react-icons/bs";

const ResultScreen = ({data,nextQuestion,setResult,toggleTimer,id,toggleQuiz}) => {
  let { result, bg, text } = data;
  return (
    <>
      {result === "Pass" ? (<Confetti style={{ zIndex: "99999" }} height={window.innerHeight} width={window.innerWidth} />) : null}
      <Offcanvas show={true} className={bg} width="100%">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <span className="bltxt">Result:</span> &nbsp;
            <b className={bg}>{result}{id === 10 ? <>;Quiz Ended</> : null}</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="resultArea">
            <div className="status">
              {bg === "pass" ? <TiTick /> : <ErrorBtn />}
            </div>
            <div className="statusTitle">{text}</div>
            <div className="resultBottom">
              {id === 10 ? (<BtnLeft onClick={() => { toggleTimer(); toggleQuiz(); setResult(false)}}/>) : (<BtnRight onClick={() => {setResult(false);toggleTimer();nextQuestion();}}/> )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      </>
  );
};
export default ResultScreen;
