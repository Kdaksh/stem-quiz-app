import { CountdownCircleTimer } from "react-countdown-circle-timer";
const QuizLoadTimer = ({ show, toggleQuizTimer }) => {
  return (
    <>
      {show ? (
        <div className="timerArea">
          <CountdownCircleTimer
            isPlaying
            onComplete={() => {
              toggleQuizTimer();
            }}
            duration={3}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[3, 2, 1, 0]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      ) : null}
    </>
  );
};
export default QuizLoadTimer;
