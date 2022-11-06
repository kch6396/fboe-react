import "../../styles/mbca/About.css";
import MBCA_Solution from "../images/MBCA_Solution.png";
import example1 from "../images/example1.png";
import example2 from "../images/example2.png";
import { useRef, useState, useEffect, useCallback } from "react";
import useScrollFadeIn from "../hook/useScrollFadeIn";
const About = () => {
  const animatedSolution1 = useScrollFadeIn("up", 1, 0);
  const animatedSolution2 = useScrollFadeIn("up", 1, 0.2);
  const animatedSolution3 = useScrollFadeIn("right", 1.5, 0.4);
  const animatedSolution4 = useScrollFadeIn("up", 1, 0.7);

  const animatedStrength1 = useScrollFadeIn("up", 1, 0);
  const animatedStrength2 = useScrollFadeIn("right", 1.5, 0.2);
  const animatedStrength3 = useScrollFadeIn("right", 1.5, 0.4);
  const animatedStrength4 = useScrollFadeIn("up", 1, 0.7);
  const animatedStrength5 = useScrollFadeIn("up", 1, 0.8);
  return (
    <div>
      <section className="MBCA--what scroll-spy">
        <div className="inner">
          <h1 {...animatedSolution1} className="back-to-position to-down">
            About MBCA Solution
          </h1>
          <h2 {...animatedSolution2} className="back-to-position to-down">
            (Mono-Camera based Blind-Spot Collision-Avoidance Assist)
          </h2>
          <div className="MBCA--what__image">
            <img
              className="back-to-position to-right"
              src={MBCA_Solution}
              alt="MBCAWHAT"
              {...animatedSolution3}
            />
            <p {...animatedSolution4} className="back-to-position to-down">
              AI Solution that measures the relative distance and speed of all
              objects visible on the screen in real-time with “one camera”
            </p>
          </div>
        </div>
      </section>
      <hr className="what--divider" />
      <section className="MBCA--strength scroll-spy">
        <div className="inner">
          <h1 {...animatedStrength1} className="back-to-position to-down">
            MBCA Strength
          </h1>
          <div className="MBCA--strength__image">
            <img
              className="back-to-position to-right"
              src={example1}
              alt="example1"
              {...animatedStrength2}
            />
            <img
              className="back-to-position to-right"
              src={example2}
              alt="example1"
              {...animatedStrength3}
            />
          </div>
          <h2 {...animatedStrength4} className="back-to-position to-down">
            1. The task previously performed by fusion of various sensors such
            as lidar, radar, ultrasound, and camera required for autonomous
            driving can be prevented through object detection and relative speed
            through the 'Only One Camera’.
          </h2>
          <h2 {...animatedStrength5} className="back-to-position to-down">
            2. MBCA can be used in various fields of mobility as well as
            autonomous driving.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default About;
