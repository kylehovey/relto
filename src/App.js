import React, { useState } from 'react';

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
          <a href={link} rel="noreferrer" target="_blank">(Link)</a>
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
                rel="noreferrer"
              />
            </li>
            <li>
              <a
                className="soc-linkedin"
                target="_blank"
                href="http://linkedin.com/in/kyle-hovey"
                rel="noreferrer"
              />
            </li>
            <li>
              <a
                className="soc-github soc-icon-last"
                target="_blank"
                href="http://github.com/kylehovey"
                rel="noreferrer"
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
            <a className="logo" href="#"></a>
            <h2>Project Portfolio</h2>
            <p>Hi! My name is Kyle. I grew up in a small community in the Sierra Nevada mountains. In 2019, I graduated Utah State University with a BS in Computational Mathematics. My passions include mathematics, electrical engineering, programming, music, hiking, climbing, and philosophy. Here you can see some highlights from my past/current projects. Check out my blog for diatribes on math and programming.</p>
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
