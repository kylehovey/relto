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
    },
    get bottomBar() {
      return (
        <div>
          <ul class="soc">
            <li>
              <a
                class="soc-facebook"
                target="_blank"
                href="http://facebook.com/192.168.Kyle.Hovey"
              />
            </li>
            <li>
              <a
                class="soc-linkedin"
                target="_blank"
                href="http://linkedin.com/in/kyle-hovey"
              />
            </li>
            <li>
              <a
                class="soc-github soc-icon-last"
                target="_blank"
                href="http://github.com/kylehovey"
              />
            </li>
          </ul>
          <div class="links">
            <a href="https://github.com/kylehovey/resume/raw/master/kyle_hovey_resume.pdf">
              Download Resume
            </a>
            <span class="divider">|</span>
            <a href="blog">Blog</a>
            <span class="divider">|</span>
            <a href="Resolutions/index.html">
              Resolutions </a>
            <span class="divider">|</span>
            <a href="MATH_5620">Math 5620</a>
          </div>
        </div>
      );
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
          <hr />
          {methods.bottomBar}
        </div>
      </div>
    </div>
  );
}

export default App;
