import stemImg from "../assets/graphics/stem-main-hero.png";
import "../assets/styles/home.css";
import { BsFillPlayCircleFill as PlayBtn } from "react-icons/bs";

const Home = ({ ToggleQuizModal }) => {
  return (
    <>
      <div className="home-section">
        <div id="home-area">
          <div className="home-top">
            <img src={stemImg} alt="" id="heroImg" />
          </div>
          <div className="home-main">
            <h1 id="stem-caption">Stem</h1>
            <p className="home-content">
              <b> STEM</b> is an approach to education that focuses on the hard
              sciences, develops critical thinking skills, and improves problem
              solving abilities. It is a broad term used to group together
              Science, Technology, Engineering, and Mathematics. <br />{" "}
              <b> Click The Button Below To Start A STEM Quiz.</b>
            </p>
            <div className="btnRow">
              <PlayBtn className="quizBtn" onClick={ToggleQuizModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
