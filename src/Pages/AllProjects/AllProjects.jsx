import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./AllProjects.scss";

const AllProjects = () => {
  return (
    <>
      <section className="all-projects py-5">
        <div className="container-lg">
          <div className="row">
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProjects;
