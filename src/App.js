import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import AllProjects from './Pages/AllProjects/AllProjects';
import Home from './Pages/Home/index.jsx';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="projects/:projectName" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
