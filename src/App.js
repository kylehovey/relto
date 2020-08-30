import React from 'react';
import logo from './logo.png';

import './App.scss';

import projects from './data/projects';

function App() {
  const methods = {
    get projects() {
      return projects.map(({ title, brief, link }, i) => (
        <li key={`project-${i}`}>
          <a href={link} target="_blank">
            <span className="title">{title}</span>
            <span className="brief">{brief}</span>
          </a>
        </li>
      ));
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="main">
          <div className="description">
            <a class="logo" href="#"></a>
            <h2>Welcome to Relto</h2>
            <p>This is Relto, Kyle Hovey's project portfolio. Here you will find links to projects and diatribes on math and science. Check out my blog if you would like to see more long-form stuff. This is Relto, Kyle Hovey's project portfolio. Here you will find links to projects and diatribes on math and science. Check out my blog if you would like to see more long-form stuff.</p>
          </div>
          <ul className="projects-list">
            {methods.projects}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
