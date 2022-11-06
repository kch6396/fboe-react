import { Link } from "react-router-dom";
import React from "react";
import backgroundImage from "../images/background.png";
import "../../styles/amc/Header.css";
import video from "../videos/AMC__video.mp4";
export default function Header() {
  return (
    <section
      className="visual"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="inner">
        <div className="visual__write fade-in1">
          <h2>Artificial Intelligence Model Compression</h2>
        </div>
        <div className="video fade-in2">
          <video controls muted preload="xxx">
            <source src={video} type="video/mp4" />이 문장은 사용자의 웹
            브라우저가 video 태그를 지원하지 않을 때 나타납니다!
          </video>
        </div>
      </div>
      <ul className="choice">
        <div className="inner">
          <li className="left">
            <Link to="/mbca">
              <div>MBCA</div>
            </Link>
          </li>
          <li className="right">
            <Link to="">
              <div>AMC</div>
            </Link>
          </li>
        </div>
      </ul>
    </section>
  );
}
