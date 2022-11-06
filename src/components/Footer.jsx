import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="companyname">
          <p className="eng">FBOE</p>
        </div>
        <div className="info">
          <div className="footercontact">
            <p className="email">fboe@fboeit.com</p>
          </div>
          <p className="address">
            Room 1033, Ulsan Biz Park, 406-21, Jongga-ro, <br />
            Jung-gu, Ulsan, Republic of Korea
          </p>
        </div>
        <p className="copyright">FBOE Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
