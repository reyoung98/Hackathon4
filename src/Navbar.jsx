import "./Navbar.scss";
import logo from "./sound-img.png";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={logo} alt=""></img>
      <a href="/">Soundify</a>
    </nav>
  );
}
