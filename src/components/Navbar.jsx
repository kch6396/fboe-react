import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import logo from "./images/FBOENAME.png";
import bar from "./images/bar.png";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [solution, setSolution] = useState(true);

  const solutionHeight = useRef();
  const solutionMargin = useRef();
  useEffect(() => {
    if (window.innerWidth < 768) {
      setVisible(false);
      setSolution(false);
    } else {
      setVisible(true);
      setSolution(true);
    }
  }, []);
  window.onresize = function (event) {
    if (window.innerWidth < 768) {
      setVisible(false);
      setSolution(false);
    } else {
      setVisible(true);
      setSolution(true);
    }
  };
  const handleClick = () => {
    setVisible(!visible);
    if (visible) {
      setSolution(false);
    }
  };
  const ClickSolution = () => {
    setSolution(!solution);
    if (!solution) {
      solutionHeight.current.style.height = 230 + "px";
      solutionMargin.current.style.marginBottom = 70 + "px";
    } else {
      solutionHeight.current.style.height = 165 + "px";
      solutionMargin.current.style.marginBottom = 10 + "px";
    }
  };
  // const [visible, setVisible] = useState(false);
  return (
    <>
      <header>
        <div className="inner">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
          {visible && (
            <ul className="nav" ref={solutionHeight}>
              <li to={"/"}>
                <Link to={"/"}>Home</Link>
              </li>
              <li id="solution__moblie" ref={solutionMargin}>
                <Link
                  to={""}
                  className="solution underline"
                  onClick={ClickSolution}
                >
                  Solutions
                </Link>
                {solution && (
                  <div className="solutions">
                    <div>
                      <Link to={"/mbca"}>MBCA</Link>
                    </div>
                    <div>
                      <Link to={"/amc"}>AMC</Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link to={"/"}>About us</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact us</Link>
              </li>
            </ul>
          )}
          <button className="nav__button">
            <img onClick={handleClick} src={bar} alt="bar" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
