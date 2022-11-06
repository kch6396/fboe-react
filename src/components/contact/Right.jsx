/* global kakao */

import "../../styles/contact/Right.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import useScrollFadeIn from "../hook/useScrollFadeIn";
import {
  Map,
  ZoomControl,
  MapTypeControl,
  MapMarker,
  MapInfoWindow,
} from "react-kakao-maps-sdk";
const { kakao } = window;

export default function Right() {
  const animatedMap = useScrollFadeIn("left", 1, 0.2);
  const textarea = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const [data, setDate] = useState({
    company: "",
    industry: "",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    jobTitle: "",
  });
  const { company, industry, firstName, lastName, email, message, jobTitle } =
    data;

  const onChange = (e) => {
    setDate({ ...data, [e.target.name]: e.target.value });
    console.log(data);
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight - 20 + "px";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://112.221.126.139:10000/api/Contactus", {
          company: company,
          industry: industry,
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
          jobTitle: jobTitle,
        })
        .then(function (res) {
          console.log(res);
          setDate({
            company: "",
            industry: "",
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            jobTitle: "",
          });
        });
    } catch (err) {
      console.log(err);
      setDate({
        company: "",
        industry: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        jobTitle: "",
      });
    }
  };

  return (
    <div className="main">
      <div className="right">
        <div className="right__above">
          <div className="table scroll-spy">
            <div className="first back-to-position to-left delay-4">
              <div className="company">
                C o m p a n y<br />
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company"
                  onChange={onChange}
                />
              </div>
              <div className="industry">
                I n d u s t r y<br />
                <input
                  type="text"
                  name="industry"
                  id="industry"
                  placeholder="Industry"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="second back-to-position to-left delay-4">
              <div className="first__name">
                Name
                <br />
                <input
                  type="text"
                  name="firstName"
                  id="fristname"
                  placeholder="Frist Name"
                  onChange={onChange}
                />
                <br />
                <div className="sub">First name</div>
              </div>
              <div className="last__name">
                <br />
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  placeholder="Last Name"
                  onChange={onChange}
                />
                <br />
                <div className="sub">Last name</div>
              </div>
            </div>
            <div className="third back-to-position to-left delay-4">
              <div className="job__title">
                J o b&nbsp;&nbsp;&nbsp;&nbsp;T i t l e<br />
                <input
                  type="text"
                  name="jobTitle"
                  id="jobtitle"
                  placeholder="Job Title"
                  onChange={onChange}
                />
              </div>
              <div className="mail">
                E m a i l<br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="message back-to-position to-left delay-4">
              M e s s a g e<br />
              <textarea
                onChange={onChange}
                // onChange={() => {
                //   onChange();
                //   handleResizeHeight();
                // }}
                name="message"
                className="autosize"
                style={{ height: "25px" }}
                placeholder="Message"
                rows={1}
                ref={textarea}
              ></textarea>
            </div>
            <div className="btn back-to-position to-down delay-5">
              <input
                type="submit"
                value="Submit"
                className="btn"
                onClick={onSubmit}
              />
            </div>
          </div>
        </div>
        <div {...animatedMap} className="map scroll-spy">
          {/* <div id="map" className="back-to-position to-left delay-1"></div> */}
          {/* <div className="back-to-position to-left delay-1" id="map"></div> */}
          <Map // 지도를 표시할 Container
            id="map"
            className="back-to-position to-left delay"
            center={{
              // 지도의 중심좌표
              lat: 35.56355833911085,
              lng: 129.32355088760315,
            }}
            // style={{
            //   // 지도의 크기
            //   width: "100%",
            //   height: "450px",
            // }}
            level={4} // 지도의 확대 레벨
          >
            <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            <ZoomControl position={kakao.maps.ControlPosition.RIGHT} />

            <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
              position={{
                // 인포윈도우가 표시될 위치입니다
                lat: 35.563442697386925,
                lng: 129.32253853048218,
              }}
              clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              onClick={() => setIsOpen(true)}
            >
              {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
              {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
              {isOpen && (
                <div style={{ minWidth: "150px" }}>
                  <img
                    alt="close"
                    width="14"
                    height="13"
                    src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsOpen(false)}
                  />
                  <div
                    class="notranslate"
                    style={{
                      padding: "5px",
                      width: "97%",
                      color: "rgb(69, 48, 138)",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    FOBE
                    <br />
                    <hr />
                    <p style={{ fontSize: "12px", color: "#333" }}>
                      Room 1033, Ulsan Biz Park, 406-21,
                      <br />
                      Jongga-ro, Jung-gu, Ulsan, Republic of Korea
                    </p>
                    <a
                      href="https://map.kakao.com/link/map/FBOE,35.563442697386925,  129.32253853048218 "
                      style={{ color: "blue", fontSize: "13px" }}
                      target="_blank"
                    >
                      Big Map View
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <a
                      href="https://map.kakao.com/link/to/FBOE,35.563442697386925,  129.32253853048218 "
                      style={{ color: "blue", fontSize: "13px" }}
                      target="_blank"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              )}
            </MapMarker>
          </Map>
        </div>
      </div>
      <p className="footer">FBOE Co., Ltd. All Rights Reserved.</p>
    </div>
  );
}
