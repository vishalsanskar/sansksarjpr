import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import HeaderTop from "./HeaderTop";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <HeaderTop/>
      <div className="nav-area">
      {  <Link to="/" className="logo">
          <img src="../img/logo.png"/>
  </Link>}

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
