import React, { useState } from 'react';
import logo from './logo.png';

import './App.scss';

import projects from './data/projects';

function App() {
  const [ selectedProjectIndex, setSelectedProjectIndex ] = useState(null);

  const methods = {
    handleClick: (i) => (e) => {
      e.preventDefault();
      setSelectedProjectIndex(i);
      return false;
    },
    get description() {
      if (selectedProjectIndex === null) {
        return null;
      }

      const {
        title,
        description,
        link
      } = projects[selectedProjectIndex];

      return (
        <div className="details">
          <button onClick={() => setSelectedProjectIndex(null)}>
            {'←'}
          </button>
          <h3>
            {title} 
          </h3>
          <p>{description}</p>
          <a href={link} target="_blank">(Link)</a>
        </div>
      );
    },
    get projects() {
      if (selectedProjectIndex !== null) {
        return null;
      }

      const elements = projects.map(({ title, brief }, i) => (
        <li key={`project-${i}`}>
          <a href="#" onClick={methods.handleClick(i)}>
            <span className="title">{title}</span>
            <span className="brief">{brief}</span>
          </a>
        </li>
      ));

      return (
        <ul className="projects-list">
          {elements}
        </ul>
      );
    },
    get bottomBar() {
      return (
        <div className="bottom-bar">
          <ul className="soc">
            <li>
              <a
                className="soc-facebook"
                target="_blank"
                href="http://facebook.com/192.168.Kyle.Hovey"
              />
            </li>
            <li>
              <a
                className="soc-linkedin"
                target="_blank"
                href="http://linkedin.com/in/kyle-hovey"
              />
            </li>
            <li>
              <a
                className="soc-github soc-icon-last"
                target="_blank"
                href="http://github.com/kylehovey"
              />
            </li>
          </ul>
          <div className="links">
            <a href="https://github.com/kylehovey/resume/raw/master/kyle_hovey_resume.pdf">
              Resume
            </a>
            <span className="divider">|</span>
            <a href="blog">Blog</a>
            <span className="divider">|</span>
            <a href="MATH_5620">Math 5620</a>
          </div>
          <div className="attribution">
            Inspired by <a href="https://github.com/autophagy/hraew">Hraew</a>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="container">
      <div className="content">
        <div className="main">
          <div className="description">
            <a class="logo" href="#"></a>
            <h2>Welcome to Relto</h2>
            <p>This is Relto, Kyle Hovey's project portfolio. Here you will find links to projects and diatribes on math and science. Check out my blog if you would like to see more long-form content on my interests.</p>
          </div>
          {methods.projects}
          {methods.description}
          {methods.bottomBar}
        </div>
      </div>
    </div>
  );
}

export default App;
