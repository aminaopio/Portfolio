import './App.css';
import React from 'react';
import NavBar from './pages/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProjectPage from './pages/Projects';
import ExperiencePage from './pages/Experience';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Routes>
          <Route path ="/" element = {<HomePage />} />
          <Route path ="/projects" element = {<ProjectPage />} />
          <Route path ="/experience" element = {<ExperiencePage />} />
          <Route path ="*" element = {<NotFoundPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
