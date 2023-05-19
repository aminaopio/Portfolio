import './App.css';
import React from 'react';
import NavBar from './pages/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ProjectPage from './pages/Projects';
import ContactPage from './pages/Contact';
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
          <Route path ="/contact" element = {<ContactPage />} />
          <Route path ="*" element = {<NotFoundPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
