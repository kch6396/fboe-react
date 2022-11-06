import Navbar from "../NavContact";
import Left from "./Left";
import Right from "./Right";
import BG from "../images/BG.png";
import "../../styles/contact/Contact.css";
export default function Contact() {
  return (
    <div className="contactUs">
      <img className="moblieBg" src={BG} alt="BG" />
      <Navbar />
      <Left />
      <Right />
    </div>
  );
}
