import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { AiFillApple } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "../../Assets/Images/hero.png";
import Logo1 from "../../Assets/Images/marqueeLogo01.webp";
import Logo2 from "../../Assets/Images/marqueeLogo02.jpg";
import Logo3 from "../../Assets/Images/marqueeLogo03.avif";
import Logo4 from "../../Assets/Images/marqueeLogo04.webp";
import Logo5 from "../../Assets/Images/marqueeLogo05.jpeg";
import Logo6 from "../../Assets/Images/marqueeLogo06.png";
import Logo7 from "../../Assets/Images/marqueeLogo07.png";
import Meta from "../../components/Meta/Meta";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Style.scss";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [state, handleSubmit] = useForm("xwkjqgyg");

  // const [ip, setIP] = useState("");

  // const getData = async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   console.log(res.data);
  //   setIP(res.data.IPv4);
  //   console.log(res.data.IPv4);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Meta title={"Imtious Islam Portfolio"} />
      {/* HERO SECTION */}
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
                <h4 className="title mb-2 mt-2 d-flex justify-content-center justify-content-sm-start align-items-center">
                  Professional &nbsp;
                  <TypeAnimation
                    className="blue"
                    sequence={[
                      "React Developer </>",
                      1500,
                      "Bug Finder 🪲",
                      1500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </h4>
                <h6 className="mb-4">
                  <strong> 3+</strong> years of professional experience as a
                  Frontend Developer. Passionate and highly skilled in front-end
                  development with pixel-perfect design and using the latest
                  technologies and tools. Self-motivated, organized, with
                  excellent time management skills, and willing to take
                  challenges to improve my knowledge with the organization’s
                  success. Curious about AI.
                </h6>
                <div className="d-flex justify-content-center justify-content-sm-start">
                  <Link
                    to="https://drive.google.com/file/d/1esQxMVdlezqnCYCpSaN3SFzrFQFZh8_6/view?usp=sharing"
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
      <section className="home-wrapper services py-3 mt-4 mt-md-3">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 pb-5">
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
                  <h5>Years of experience 💪🏻</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-3 count">
                  <h2>
                    <CountUp delay={9} end={750} duration={5} />+
                  </h2>
                  <h5>Coffee Consumed 🍵</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS SECTION */}
      <section className="home-wrapper projects py-3">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 pb-3 pb-md-5">
              <div>
                <h1 className="heading d-flex align-items-center justify-content-center py-md-3">
                  <span className="border-left">Creative</span> &nbsp;
                  <span className="blue">Portfolio</span>
                </h1>
                <h6 className="sub-heading">
                  A portfolio is a taste of my work. It's speak about my
                  personality.
                  <br /> The coding patterns & the design is reflected by the
                  projects.
                </h6>
                <p className="note mt-4">
                  *Please note: Hovering on the card will hide the project
                  details.
                  <br /> & hovering or touch on details will show more
                  information.
                </p>
              </div>
            </div>
            <div className="col-12">
              <ProjectCard />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <Link
                to="/projects"
                className="button my-5 d-flex gap-2 align-items-center justify-content-center"
              >
                All Projects <AiFillApple />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE SECTION */}
      <section className="home-wrapper marquee py-5 mt-4 mb-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <Marquee speed="40" gradientColor={[17, 0, 13]}>
                <div className="d-flex align-items-center-justify-content-center gap-5">
                  <img src={Logo1} alt="logo1" className="img-fluid logo1" />
                  <img src={Logo2} alt="logo2" className="img-fluid logo2" />
                  <img src={Logo3} alt="logo3" className="img-fluid logo3" />
                  <img src={Logo5} alt="logo5" className="img-fluid logo5" />
                  <img src={Logo4} alt="logo4" className="img-fluid logo4" />
                  <img src={Logo6} alt="logo6" className="img-fluid logo6" />
                  <img src={Logo7} alt="logo7" className="img-fluid logo7" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT FORM */}
      <section className="home-wrapper contact-form py-5 overflow-hidden">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 pb-3 pb-md-5">
              <div>
                <h1 className="heading d-flex align-items-center justify-content-center py-md-3">
                  <span className="border-left">Contact</span> &nbsp;
                  <span className="blue">Me</span>
                </h1>
                <h6 className="sub-heading">
                  Tell me about your project. Send a message by the form or
                  contact me by Email, <br /> LinkedIn, Facebook, Messenger or
                  Phone Number 😊
                </h6>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-12 col-md-6 my-5 mt-3 my-md-0 d-flex justify-content-center justify-content-md-start align-items-center"
            >
              <div className="map d-flex align-items-center overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2046410.7233186755!2d90.79119435455188!3d23.373233044242355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f249815015d%3A0x549a77e542115f77!2sCumilla!5e0!3m2!1sen!2sbd!4v1679119575079!5m2!1sen!2sbd"
                  width="440"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  className="rounded"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div data-aos="fade-left" className="col-12 col-md-6">
              <form onSubmit={handleSubmit}>
                <p className="fw-bold text-primary mb-2">Name</p>
                <input
                  type="text"
                  name="FirstName"
                  className="form-control mb-3"
                  id="validationTooltip01"
                  placeholder="Full name ✍🏻"
                  required
                />
                <p className="fw-bold text-primary mb-2">Email</p>
                <input
                  type="email"
                  name="Email"
                  className="form-control mb-3"
                  placeholder="Your E-mail 📧"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <p className="fw-bold text-primary mb-2">Message</p>
                <input
                  type="text"
                  name="Message"
                  className="form-control pt-5 pb-5 text-center mb-3"
                  placeholder="Type your message here... 👩🏻‍💻"
                  id="validationTooltip05"
                  required
                />
                {state.succeeded ? (
                  <p className="text-success mb-0 text-center">
                    Message sent successfully ✅
                  </p>
                ) : (
                  ""
                )}
                <button
                  className="button mt-4 hvr-grow d-block mx-auto mx-md-0"
                  type="submit"
                >
                  S E N D ➡️
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
