import "aos/dist/aos.css";
import React from "react";
import { BsMedium } from "react-icons/bs";
import { FaFeather, FaHome, FaLaptopCode, FaUserSecret } from "react-icons/fa";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../Assets/Styles/hover.css";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header-top-strip pb-1 mb-1 mb-md-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 d-none d-md-flex gap-5">
              <div className="d-flex align-items-center gap-2">
                <MdEmail className="icon1" />
                <p className="mb-0">imtious.islam.me@gmail.com</p>
              </div>
              <div className="d-flex align-items-center">
                <MdPhoneIphone className="icon2" />
                <p className="mb-0">+8801635501610</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-5">
                <Link
                  to="https://www.facebook.com/imtious.midul/"
                  target={"_blank"}
                >
                  <GrFacebookOption className="icon3" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/imtious/"
                  target={"_blank"}
                >
                  <GrLinkedinOption className="icon4" />
                </Link>
                <Link to="https://github.com/Imtious-coder" target={"_blank"}>
                  <GrGithub className="icon5" />
                </Link>
                <Link
                  to="https://medium.com/@imtious.islam.me"
                  target={"_blank"}
                >
                  <BsMedium className="icon6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-main pb-1 sticky-top">
        <div className="container-lg py-2">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
              <Link to="/" className="logo">
                <h1>Imtious Islam</h1>
              </Link>
            </div>
            <div className="col-12 col-md-6 mt-2 mt-md-0">
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  to="/"
                  className="d-flex align-items-center gap-2 py-2 active hvr-bob"
                  title="Home Page"
                >
                  <FaHome className="icon" />
                  <h5 className="mb-0">Home</h5>
                </Link>
                <Link
                  to="https://medium.com/@imtious.islam.me"
                  className="d-flex align-items-center gap-2 py-2 active hvr-bob"
                  target={"_blank"}
                  title="Medium.com"
                >
                  <FaFeather className="icon" />
                  <h5 className="mb-0">Articles</h5>
                </Link>
                <Link
                  to="/projects"
                  className="d-flex align-items-center gap-2 py-2 active hvr-bob"
                  title="Projects"
                >
                  <FaLaptopCode className="icon" />
                  <h5 className="mb-0">Projects</h5>
                </Link>
                <Link
                  to="/about"
                  className="d-flex align-items-center gap-2 py-2 active hvr-bob"
                  title="About"
                >
                  <FaUserSecret className="icon" />
                  <h5 className="mb-0">About</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
