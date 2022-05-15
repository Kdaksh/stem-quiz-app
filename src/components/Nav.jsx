import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { BsGithub as Github } from "react-icons/bs";
import "../assets/styles/nav.css";
const Nav = (props) => {
  return (
    <>
      <>
        <Navbar bg="light" variant="light">
          <div className="flex-area">
              <Navbar.Brand>
                <div id="stemLogo"><div id="s">S</div><div id="t">T</div><div id="e">E</div><div id="m">M</div></div>
                <div className="brand-text"><span id="s">Quiz</span><span id="t">master</span></div>
              </Navbar.Brand>
            
            <div className="githubIco"><a href="https://github.com/kdaksh" target="_blank"> <i id="githubIcon"><Github /></i> </a></div>
          </div>
        </Navbar>
      </>
    </>
  );
};
export default Nav;
