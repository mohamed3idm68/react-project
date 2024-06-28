import { Link } from "react-router-dom";
import "./Navbar.css";



function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="logo">
          <h2 className="logo-text">Ultra Profile</h2>
        </div>
        <ul className="ul-list">
          <li className="list-item">
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li className="list-item">
            <a href="#">Work</a>
          </li>
          <li className="list-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="list-item">
            <a href="#">Resume</a>
          </li>
          <li className="list-item">
            <a href="#">About</a>
          </li>
          <li className="list-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
