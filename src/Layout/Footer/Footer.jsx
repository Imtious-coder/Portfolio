import React from "react";
import { BsMedium } from "react-icons/bs";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper py-4 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="logo">
                <h1 className="text-center text-sm-start">Imtious Islam</h1>
              </div>
              <div className="d-flex mt-4 align-items-center justify-content-center justify-content-md-start gap-4">
                <Link
                  to="https://www.facebook.com/imtious.midul/"
                  target={"_blank"}
                  className="social1"
                >
                  <GrFacebookOption className="icon1" />
                </Link>
                <Link
                  to="https://github.com/Imtious-coder"
                  target={"_blank"}
                  className="social2"
                >
                  <GrGithub className="icon2" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/imtious/"
                  target={"_blank"}
                  className="social3"
                >
                  <GrLinkedinOption className="icon3" />
                </Link>
                <Link
                  to="https://medium.com/@imtious.islam.me"
                  target={"_blank"}
                  className="social4"
                >
                  <BsMedium className="icon4" />
                </Link>
              </div>
            </div>
            <div className="d-none d-sm-block col-6 col-md-2 col-lg-1"></div>
            <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <h5>Support</h5>
                    <Link to="/pricing">
                      <h6>Pricing</h6>
                    </Link>
                    <Link to="/contact">
                      <h6>Contact</h6>
                    </Link>
                    <Link to="/faq">
                      <h6>FAQ</h6>
                    </Link>
                    <Link to="/terms&Conditions">
                      <h6>Terms & Conditions</h6>
                    </Link>
                  </div>
                  <div className="d-none d-md-block col-md-2 col-lg-1"></div>
                  <div className="col-6 col-md-4">
                    <h5>Site Map</h5>
                    <Link to="/">
                      <h6>Home</h6>
                    </Link>
                    <Link
                      to="https://medium.com/@imtious.islam.me"
                      target={"_blank"}
                    >
                      <h6>Articles</h6>
                    </Link>
                    <Link to="/projects">
                      <h6>Projects</h6>
                    </Link>
                    <Link to="/about">
                      <h6>About</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-5 mt-lg-0">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d59968803.175124936!2d91.18331!3d23.453059!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1678081618622!5m2!1sen!2sbd"
                  style={{ border: "0", borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  width={"100%"}
                  height={"80%"}
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
