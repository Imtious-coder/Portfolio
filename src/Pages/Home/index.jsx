import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AnimatedText from "react-animated-text-content";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import HeroImage from "../../Assets/Images/hero.png";
import Meta from "../../components/Meta/Meta";
import "./Style.scss";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Meta title={"Home"} />
      <section className="home-wrapper hero py-3 py-md-5">
        <div className="container-lg py-md-5">
          <div className="row d-flex flex-row-reverse">
            <div
              data-aos="fade-left"
              className="col-12 col-md-6 d-flex justify-content-center align-items-center"
            >
              <img
                src={HeroImage}
                alt="hero_image"
                className="img-fluid h-100 w-75 mb-5 p-4 p-sm-5 p-md-0"
              />
            </div>
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <div className="px-lg-4">
                <h1 className="mb-0 text-center text-sm-start">
                  Imtious Islam
                </h1>
                <h4 className="mb-3 text-center text-sm-start">
                  <AnimatedText
                    type="words"
                    animation={{
                      x: "200px",
                      y: "-20px",
                      scale: 1.1,
                      ease: "ease-in-out",
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                  >
                    Professional Bug Finder & React Developer
                  </AnimatedText>
                </h4>
                <h6 className="mb-4">
                  <AnimatedText
                    type="throw"
                    animation={{
                      x: "200px",
                      y: "-20px",
                      scale: 1.1,
                      ease: "ease-in-out",
                    }}
                    animationType="float"
                    interval={0.02}
                    duration={0.0}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                  >
                    2+ years of professional experience as a Frontend Developer.
                    Passionate and highly skilled in front-end development with
                    pixel-perfect design and the use of the latest technologies
                    and tools. Self-motivated, organized, with excellent time
                    management skills, and willing to take challenges to improve
                    my knowledge with the success of the organization. Curious
                    about AI technology.
                  </AnimatedText>
                </h6>
                <div className="d-flex justify-content-center justify-content-sm-start">
                  <Link
                    to="https://drive.google.com/file/d/1D53fgFmX6FV5LVcUZgMcig9V4cuY70Ec/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="hvr-grow"
                    download
                  >
                    <button className="button d-flex justify-content-center align-items-center">
                      Resume <HiOutlineDownload className="ms-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
