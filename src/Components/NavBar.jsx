import React from "react";
import { SlBasket } from "react-icons/sl";
import rslogo from "../images/rs-logo-2020.svg";

function NavBar() {
  return (
    <>
      <nav>
        <div className="navbar container-fluid bg-light">
          <div className="navbar-container container d-flex justify-content-between align-items-center bg-light">
            <div className="navbar-img ms-5">
              <img src={rslogo} alt="" width={95} />
            </div>
            <div>
              <button className="btn btn-dark me-4">KOSTENLOS TESTEN</button>
              <SlBasket className="navbar-ıcons me-5 " />
            </div>
          </div>
        </div>
        <div className="hr-1 container-fluid  "></div>
        <div className="hr-2 container-fluid  "></div>
      </nav>
    </>
  );
}

export default NavBar;
