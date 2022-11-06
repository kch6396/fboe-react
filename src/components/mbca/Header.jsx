import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import styles from "../../styles/mbca/Header.module.css";
import backgroundImage from "../images/background.png";

import video from "../videos/MBCA__video.mp4";

export default function Header() {
  return (
    <section
      className={styles.visual}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.inner}>
        <div className={`${styles.visualwrite} ${styles.fadein}`}>
          <h2 className={`${styles.visualwriteh2} ${styles.fadein1}`}>
            Mono-Camera based Blind-Spot Collision-Avoidance Assist
          </h2>
        </div>
        <div className={`${styles.video} ${styles.fadein2}`}>
          <video controls muted preload="xxx">
            <source src={video} type="video/mp4" />이 문장은 사용자의 웹
            브라우저가 video 태그를 지원하지 않을 때 나타납니다!
          </video>
        </div>
      </div>
      <ul className={styles.choice}>
        <div className={styles.inner}>
          <li className={styles.left}>
            <Link to="">
              <div>MBCA</div>
            </Link>
          </li>
          <li className={styles.right}>
            <Link to="/amc">
              <div>AMC</div>
            </Link>
          </li>
        </div>
      </ul>
    </section>
  );
}
