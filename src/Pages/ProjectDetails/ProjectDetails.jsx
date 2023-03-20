import React from "react";
import { FaCodeBranch, FaGlobeAsia } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { projectData } from "../../utils/ProjectData";
import "./ProjectDetails.scss";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const details = projectData?.find((detail) => detail.name === projectName);
  const {
    name,
    type,
    description,
    website,
    code,
    li1,
    li2,
    li3,
    li4,
    li5,
    li6,
    li7,
  } = details;
  return (
    <>
      <section className="project-details py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-6 h-100">
              <iframe
                src={website}
                title="website"
                className="website shadow py-3 px-2 rounded-3"
              ></iframe>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0 ps-0 ps-md-5">
              <div>
                <h1 className="text-sm-center text-md-start">{name}</h1>
                <h5 className="blue text-sm-center text-md-start my-3">
                  {type}
                </h5>
                <h6 className="text-sm-center text-md-start">{description}</h6>
                <ul className="mt-4 mb-5">
                  <li className="text-sm-center text-md-start"> {li1} </li>
                  <li className="text-sm-center text-md-start"> {li2} </li>
                  <li className="text-sm-center text-md-start"> {li3} </li>
                  <li className="text-sm-center text-md-start"> {li4} </li>
                  <li className="text-sm-center text-md-start"> {li5} </li>
                  <li className="text-sm-center text-md-start"> {li6} </li>
                  <li className="text-sm-center text-md-start"> {li7} </li>
                </ul>
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-4 gap-md-5">
                  <Link
                    to={website}
                    target={"_blank"}
                    className="button3 d-flex justify-content-center align-items-center"
                  >
                    Live &nbsp; <FaGlobeAsia />
                  </Link>
                  <Link
                    to={code}
                    target={"_blank"}
                    className="button d-flex justify-content-center align-items-center"
                  >
                    Code &nbsp; <FaCodeBranch />
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

export default ProjectDetails;
