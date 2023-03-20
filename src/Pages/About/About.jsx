import React from "react";
import Image from "../../Assets/Images/My.jpg";
import "./About.scss";

const About = () => {
  return (
    <>
      <section className="about py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4">
              <img className="img-fluid" src={Image} alt="profile_picture" />
            </div>
            <div className="d-none d-lg-block col-1"></div>
            <div className="col-12 col-md-7 col-lg-7 mt-5 mt-md-0">
              <div>
                <h1 className="text-center text-sm-start mb-3">About me</h1>
                <h6>
                  <strong>2+</strong> years of professional experience as a
                  Frontend Developer. Passionate and highly skilled in front-end
                  development with pixel-perfect design and the use of the
                  latest technologies and tools. Self-motivated, organized, with
                  excellent time management skills, and willing to take
                  challenges to improve my knowledge with the success of the
                  organization. Curious about AI technology.
                </h6>
              </div>
              <div className="shadow p-4 rounded-4 mt-5">
                <h2 className="text-center text-sm-start mb-3">Skills</h2>
                <p>
                  JavaScript, ES6+, React.js, Tailwind, Bootstrap5, REST API,
                  Git, GitHub, Jira, Figma || Typescript, Redux, Node.js,
                  Express.js, Next.js, SASS, MongoDB, Material-UI, Firebase, &
                  Heroku.
                </p>
                <p className="mb-1">
                  <strong>Soft Skills:</strong>
                </p>
                <p>
                  Self-learner, Organized, Time management, Communication,
                  Teamwork, & Fast-learner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
