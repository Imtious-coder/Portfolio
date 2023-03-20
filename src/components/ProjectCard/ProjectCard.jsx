import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { projectData } from "../../utils/ProjectData";
import "./ProjectCard.scss";

const ProjectCard = () => {
  const { pathname } = useLocation();
  return (
    <div className={`${
      pathname === "/projects"
        ? "px-4 px-md-5 "
        : "px-0"
    } container`}>
      <div className="row gap-4 justify-content-center">
        {projectData?.map((projects, index) => {
          return (
            <div
              className={`${
                pathname === "/projects"
                  ? "col-12 all-project-card"
                  : "col-12 col-md-5 col-lg-4"
              } my-4 my-sm-0 p-0 project-card position-relative hvr-box-shadow-outset`}
              key={index}
            >
              <iframe
                src={projects.website}
                title="website"
                className="website"
              ></iframe>
              <div className="details position-absolute">
                <div className="position-absolute up">
                  <BsArrowUpCircle />
                </div>
                <h2 className="mb-2">{projects.name}</h2>
                <h5 className="mb-2">{projects.type}</h5>
                <h6 className="my-3">{projects.description}</h6>
                <div className="d-flex justify-content-center gap-3 align-items-center">
                  <Link
                    to={projects.website}
                    target={"_blank"}
                    className="button2 d-flex gap-2 align-items-center"
                  >
                    <FaEye />
                    Preview
                  </Link>
                  <Link
                    to={"/projects/" + projects.name}
                    className="button2 d-flex gap-2 align-items-center"
                  >
                    Details <MdAdsClick />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
