import { Modal, Button } from "react-bootstrap";
const QuizModal = ({ show, ToggleQuizModal,toggleQuiz }) => {
  return (
    <>
      <Modal show={show} onClick={ToggleQuizModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <b>About Stem Quiz And Its Rules</b>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>The Quiz Contains 10 Basic Questions.</li>
            <li>You Have 30 Seconds For Each Question</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ToggleQuizModal}>
            Close
          </Button>

          <Button variant="primary" onClick={toggleQuiz}>Start Quiz</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default QuizModal;
