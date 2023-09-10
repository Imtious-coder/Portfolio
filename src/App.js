import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import About from './Pages/About/About';
import AllProjects from './Pages/AllProjects/AllProjects';
import Home from './Pages/Home/index.jsx';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Tests from './utils/Tests';

function App() {
  const [hacked, setHacked] = useState(true)

  setTimeout(() => {
    setHacked(false)
  }, 4000);
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
