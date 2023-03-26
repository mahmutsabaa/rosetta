import React from "react";
import headerimg from "../images/header-img.png";

function Header() {
  return (
    <>
      <header className="container-fluid animate__animated animate__fadeIn">
        <div className="header container d-sm-flex justify-content-between align-items-center  ">
          <div className="header-left col-sm-5 ms-lg-5  ">
            <h1 className="mb-4">
              NEU: Rosetta Stone <br /> Friends & Family
            </h1>
            <h6 className="mb-4">
              5 x Lifetime-Zugang zu allen Sprachen
              <br /> 499€ <strike> 1745€</strike>
            </h6>
            <button className="btn btn-primary">JETZT SCHENKEN</button>
          </div>
          n
          <div className="header-right container-md-fluid me-lg-5">
            <img src={headerimg} alt="img" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
