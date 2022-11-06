import "../../styles/amc/About.css";
import AMC_Solution from "../images/AMC_Solution.png";
import AMC_PERFORMANCE from "../images/AMC_PERFORMANCE.png";
import AMC_SPEED from "../images/AMC_SPEED.png";
import AMC_COMPLEXITY from "../images/AMC_COMPLEXITY.png";
import AMC_HARDWARE from "../images/AMC_HARDWARE.png";
import useScrollFadeIn from "../hook/useScrollFadeIn";

export default function About() {
  const animatedSolution1 = useScrollFadeIn("up", 1, 0);
  const animatedSolution2 = useScrollFadeIn("up", 1, 0.2);
  const animatedSolution3 = useScrollFadeIn("right", 1.5, 0.4);
  const animatedSolution4 = useScrollFadeIn("up", 1, 0.7);

  const animatedStrength1 = useScrollFadeIn("up", 1, 0);
  const animatedStrength2 = useScrollFadeIn("right", 1.5, 0.2);
  const animatedStrength3 = useScrollFadeIn("right", 1.5, 0.4);
  const animatedStrength4 = useScrollFadeIn("right", 1.5, 0.6);
  const animatedStrength5 = useScrollFadeIn("right", 1.5, 0.8);
  const animatedStrength6 = useScrollFadeIn("up", 1, 0.3);
  const animatedStrength7 = useScrollFadeIn("up", 1, 0.5);
  const animatedStrength8 = useScrollFadeIn("up", 1, 0.7);
  const animatedStrength9 = useScrollFadeIn("up", 1, 0.9);
  return (
    <div>
      <section className="AMC--what scroll-spy">
        <div className="inner">
          <h1 {...animatedSolution1} className="back-to-position to-down">
            About AMC Solution
          </h1>
          <h2 {...animatedSolution2} className="back-to-position to-down">
            (Artificial Intelligence Model Compression)
          </h2>
          <div className="AMC--what__image">
            <img
              className="back-to-position to-right"
              src={AMC_Solution}
              alt="MBCAWHAT"
              {...animatedSolution3}
            />
            <p {...animatedSolution4} className="back-to-position to-down">
              A solution that lowers maintenance cost and H/W cost through
              optimization and light weight according to artificial intelligence
              (AI) model
            </p>
          </div>
        </div>
      </section>
      <hr className="what--divider" />
      <section className="AMC--strength scroll-spy">
        <div className="inner">
          <div>
            <h1 {...animatedStrength1} className="back-to-position to-down">
              AMC Strength
            </h1>
          </div>
          <div className="AMC--strength__image">
            <div>
              <img
                className="back-to-position to-right "
                src={AMC_PERFORMANCE}
                alt="PERFORMACE"
                {...animatedStrength2}
              />
              <p {...animatedStrength6} className="back-to-position to-down ">
                -0% ~ - 5%
              </p>
            </div>
            <div>
              <img
                className="back-to-position to-right "
                src={AMC_SPEED}
                alt="SPEED"
                {...animatedStrength3}
              />
              <p {...animatedStrength7} className="back-to-position to-down ">
                6x ~ 14x
              </p>
            </div>
            <div>
              <img
                className="back-to-position to-right "
                src={AMC_COMPLEXITY}
                alt="COMPLEXITY"
                {...animatedStrength4}
              />
              <p {...animatedStrength8} className="back-to-position to-down ">
                0.3x ~ 0.7x
              </p>
            </div>
            <div>
              <img
                className="back-to-position to-right "
                src={AMC_HARDWARE}
                alt="HARDWARE"
                {...animatedStrength5}
              />
              <p {...animatedStrength9} className="back-to-position to-down ">
                CPU Small GPU
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
