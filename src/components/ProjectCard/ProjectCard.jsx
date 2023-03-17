import React from "react";
import { FaEye } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import { projectData } from "../../utils/ProjectData";
import "./ProjectCard.scss";

const ProjectCard = () => {
  return (
    <div className="container">
      <div className="row gap-4 justify-content-center">
        {projectData?.map((projects, index) => {
          return (
            <div
              className="col-12 col-md-5 col-lg-4 p-0 project-card position-relative hvr-shrink"
              key={index}
            >
              <img
                src={projects.image}
                alt="projects_image"
                className="img-fluid d-block m-auto"
              />
              <div className="details position-absolute">
                <h2 className="mb-3">{projects.name}</h2>
                <h5 className="mb-3">{projects.type}</h5>
                <h6 className="mt-3 mb-5">{projects.description}</h6>
                <div className="d-flex justify-content-center gap-3 align-items-center">
                  <button className="button2 d-flex gap-2 align-items-center">
                    <FaEye />
                    Preview
                  </button>
                  <button className="button2 d-flex gap-2 align-items-center">
                    Details <MdAdsClick />
                  </button>
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
