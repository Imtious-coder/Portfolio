import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { AiFillApple } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import HeroImage from "../../Assets/Images/hero.png";
import Meta from "../../components/Meta/Meta";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
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
                  Professional Bug Finder & React Developer
                </h4>
                <h6 className="mb-4">
                  2+ years of professional experience as a Frontend Developer.
                  Passionate and highly skilled in front-end development with
                  pixel-perfect design and the use of the latest technologies
                  and tools. Self-motivated, organized, with excellent time
                  management skills, and willing to take challenges to improve
                  my knowledge with the success of the organization. Curious
                  about AI technology.
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
      {/* SERVICE SECTION  */}
      <section className="home-wrapper services py-3">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 pb-3 pb-md-5">
              <div>
                <h1 className="heading d-flex align-items-center justify-content-center py-md-3">
                  <span className="border-left">Awesome</span> &nbsp;
                  <span className="blue">Services</span>
                </h1>
                <h6 className="sub-heading">
                  The best service that you want. Very low pricing for most
                  advance service. <br /> Contact me for more details about the
                  services.
                </h6>
              </div>
            </div>
            <div className="col-12">
              <ServiceCard />
            </div>
          </div>
        </div>
      </section>
      {/* COUNTUP SECTION */}
      <section
        data-aos="zoom-in"
        className="home-wrapper counts py-3 py-md-5 my-5"
      >
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <div className="row d-flex align-items-center justify-content-between">
                <div className=" pt-5 pt-sm-0 col-12 col-sm-6 col-md-3 count">
                  <h2>
                    <CountUp delay={5} end={34} duration={10} />+
                  </h2>
                  <h5>Project Done ✅</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-3 count">
                  <h2>
                    <CountUp delay={7} end={12000} duration={5} />
                    k+
                  </h2>
                  <h5>Lines of coding 👩🏻‍💻</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-3 count">
                  <h2>
                    <CountUp delay={7} end={2} duration={5} />+
                  </h2>
                  <h5>years of experience 💪🏻</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-3 count">
                  <h2>
                    <CountUp delay={9} end={750} duration={5} />+
                  </h2>
                  <h5>coffee completed 🍵</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS SECTION */}
      <section className="home-wrapper services py-3">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 pb-3 pb-md-5">
              <div>
                <h1 className="heading d-flex align-items-center justify-content-center py-md-3">
                  <span className="border-left">Creative</span> &nbsp;
                  <span className="blue">Portfolio</span>
                </h1>
                <h6 className="sub-heading">
                  A portfolio is much more than a simple showcase of work, its
                  personality is just as important <br /> as the projects
                  displayed on it.
                </h6>
              </div>
            </div>
            <div className="col-12">
              <ProjectCard />
            </div>
            <div className="col-12">
              <button className="d-block m-auto my-5 d-flex gap-2 align-items-center">
                All Projects <AiFillApple />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
