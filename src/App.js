import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout/Layout.jsx";
import About from "./Pages/About/About";
import AllProjects from "./Pages/AllProjects/AllProjects";
import Home from "./Pages/Home/index.jsx";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Tests from "./utils/Tests";
// // GA4
import ReactGA from "react-ga4";

function App() {
  const [hacked, setHacked] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHacked(false);
    }, 5);
  }, []);

  // GA4
  const GA4_ID = "G-FSF4B3VE9V";
  ReactGA.initialize(GA4_ID);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: "Portfolio",
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={hacked === false ? <Layout /> : <Tests />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="projects/:projectName" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
