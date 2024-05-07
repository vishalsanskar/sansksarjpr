import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import '../css/root.css';


export default function Root() {
  return (
    <div>
      <Header />
      <div className="MuiContainer-root">
      <div className="main-content-box">
      <Outlet />
      </div>
      </div>
      <Footer/>
    </div>
  );
}
