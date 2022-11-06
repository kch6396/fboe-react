/* global kakao */
import { useState, useRef } from "react";
import BG from "../images/BG.png";
import "../../styles/contact/Left.css";
import {
  Map,
  ZoomControl,
  MapTypeControl,
  MapMarker,
  MapInfoWindow,
} from "react-kakao-maps-sdk";
const { kakao } = window;

export default function Left() {
  const [isActive, setIsActive] = useState(true);
  const onClick = (event) => {
    setIsActive((current) => !current);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <input
        //className="map__btn btn"
        className={isActive ? "map__btn btn" : "map__btn btn change"}
        type="button"
        value="M A P"
        onClick={onClick}
      />

      <img className="bg" src={BG} alt="BG" />
      <div className="left scroll-spy">
        <div className="left__write">
          <div className="title back-to-position to-up delay-0">
            Contact <br />
            us
          </div>
          <div className="information">
            <div className="line back-to-position to-up delay-1"></div>
            <div className="des back-to-position to-right delay-2">
              We provide optimal artificial <br />
              intelligence solutions for various fields.
            </div>
            <div className="email back-to-position to-right delay-3">
              <span className="material-icons notranslate">email</span>
              fboe@fboeit.com
            </div>
            <div className="address back-to-position to-right delay-3">
              <span className="material-icons notranslate">home</span>
              Room 1033, Ulsan Biz Park, 406-21,
              <br /> Jongga-ro, Jung-gu, Ulsan,
              <br /> Republic of Korea
            </div>
          </div>
        </div>
      </div>
      <div className="right windowmap">
        <div className={isActive ? "map scroll-spy" : "map scroll-spy active"}>
          {/* <div id="map" className="back-to-position to-left delay-1"></div> */}
          {/* <div className="back-to-position to-left delay-1" id="map"></div> */}
          <Map // 지도를 표시할 Container
            id="map"
            className="back-to-position to-left delay-1"
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
    </div>
  );
}
