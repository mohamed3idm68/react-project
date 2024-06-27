
import { Link } from "react-router-dom";





function Navbar() {
    return (
      <div className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
      </div>
    );
  }
  
  export default Navbar;