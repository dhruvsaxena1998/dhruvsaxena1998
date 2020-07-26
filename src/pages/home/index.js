import React, { Component } from "react";
import "./index.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <section class="s1">
          <div className="main-container">
            <div className="greeting-wrapper">
              <h1>Hi, I'm Dhruv Saxena</h1>
            </div>
            <div className="intro-wrapper">
              <div className="nav-wrapper">
                <a href="/">
                  <div className="dots-wrapper">
                    <div className="browser-dot" id="dot-1"></div>
                    <div className="browser-dot" id="dot-2"></div>
                    <div className="browser-dot" id="dot-3"></div>
                  </div>
                </a>

                <ul id="navigation">
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="left-column">
                <img
                  id="profile_pic"
                  src="https://i.imgur.com/iQSeDSu.jpg?1"
                  alt="avatar"
                />
                <h5 style={{ textAlign: "center", lineHeight: 0 }}>
                  Personalize Theme
                </h5>

                <div id="theme-options-wrapper">
                  <div
                    data-mode="light"
                    id="light-mode"
                    class="theme-dot"
                  ></div>
                  <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
                  <div
                    data-mode="green"
                    id="green-mode"
                    class="theme-dot"
                  ></div>
                  <div
                    data-mode="purple"
                    id="purple-mode"
                    class="theme-dot"
                  ></div>
                </div>
              </div>
              <div class="right-column">
                <div id="preview-shadow">
                  <div id="preview">
                    <div id="corner-tl" class="corner"></div>
                    <div id="corner-tr" class="corner"></div>
                    <h3>What I Do</h3>
                    <p>
                      I'm Fulltime JavaScript Frontend Developer. <br />
                      <small>ReactJS | React-Native | VueJS</small>
                    </p>
                    <div id="corner-br" class="corner"></div>
                    <div id="corner-bl" class="corner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="s2">
          <div class="main-container">
            <div class="about-wrapper">
              <div class="about-me">
                <h4>More about me</h4>

                <p>
                  I build new projects just to tickle my brain and love teaching
                  others how they're made.
                </p>

                <p>
                  While I keep busy teaching courses, I still take interviews in
                  search of a great team & projects that interest me.
                </p>

                <hr />

                <h4>TOP EXPERTISE</h4>

                <p>
                  Frontend developer with primary focus on React and Vue.<br/>
                  On the road to become fullstack{" "}-{" "} 
                  <a target="_blank" href="resume.pdf">
                    Download Resume
                  </a>
                </p>

                <div id="skills">
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React-Native</li>
                    <li>Redux, Saga</li>
                    <li>MongoDB</li>
                  </ul>

                  <ul>
                    <li>Vue.JS</li>
                    <li>Quasar</li>
                    <li>REST, GraphQL</li>
                    <li>MySQL</li>
                    <li>Heroku</li>
                  </ul>
                </div>
              </div>

              <div class="social-links">
                <img id="social_img" src="https://i.imgur.com/hqKJRvG.png" />
                <h3>Find me on Github & Facebook</h3>

                <a target="_blank" href="https://github.com/dhruvsaxena1998">
                  Github: @dhruvsaxena1998
                </a>
                <br />
                <a target="_blank" href="https://facebook.com/dhruvsaxena1998">
                  Facebook: @dhruvsaxena1998
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
