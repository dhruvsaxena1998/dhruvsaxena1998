import React, { Component } from "react";
import "./index.css";
export default class Home extends Component {
  state = {
    default: `:root {
      --mainColor: #eaeaea;
      --secondaryColor: #fff;
      --borderColor: #c1c1c1;
      --mainText: black;
      --secondaryText: #4b5156;
      --themeDotBorder: #24292e;
      --previewBg: rgb(251, 249, 243, 0.8);
      --previewShadow: #f0ead6;
      --buttonColor: black;
    }`,
    blue: `:root{
      --mainColor:#15202B;
      --secondaryColor:#192734;
      --borderColor:#164D56;
      --mainText:#fff;
      --secondaryText:#eeeeee;
      --themeDotBorder:#FFF;
      --previewBg:rgb(25, 39, 52, 0.8);
      --previewShadow:#111921;
      --buttonColor:#17a2b8;
    }`,
    green: `:root{
      --mainColor:#606B56;
      --secondaryColor:#515a48;
      --borderColor:#161914;
      --mainText:#fff;
      --secondaryText:#eeeeee;
      --themeDotBorder:#FFF;
      --previewBg:rgb(81, 90, 72, 0.8);
      --previewShadow:#2a2f25;
      --buttonColor:#669966;
    }`,
    purple: `:root {
      --mainColor: #46344e;
      --secondaryColor: #382a3f;
      --borderColor: #1d1520;
      --mainText: #fff;
      --secondaryText: #eeeeee;
      --themeDotBorder: #fff;
      --previewBg: rgb(29, 21, 32, 0.8);
      --previewShadow: #2b202f;
      --buttonColor: #8534a3;
    }`,
  };

  onThemeChange = (e, theme) => {
    e.preventDefault();
    console.log(this[theme]);
    document.head.insertAdjacentHTML(
      "beforeend",
      `<style>${this.state[theme]}</style>`
    );
  };
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
                    onClick={(e) => this.onThemeChange(e, "default")}
                  ></div>
                  <div
                    data-mode="blue"
                    id="blue-mode"
                    class="theme-dot"
                    onClick={(e) => this.onThemeChange(e, "blue")}
                  ></div>
                  <div
                    data-mode="green"
                    id="green-mode"
                    class="theme-dot"
                    onClick={(e) => this.onThemeChange(e, "green")}
                  ></div>
                  <div
                    data-mode="purple"
                    id="purple-mode"
                    class="theme-dot"
                    onClick={(e) => this.onThemeChange(e, "purple")}
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
                  Frontend developer with primary focus on React and Vue.
                  <br />
                  On the road to become fullstack -{" "}
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
        <section class="s1">
          <div class="main-container">
            <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>

            <div class="post-wrapper">
              <div>
                <div class="post">
                  <img class="thumbnail" src="images/dash.jpg" />
                  <div class="post-preview">
                    <h6 class="post-title">Laboratory Management System</h6>
                    <p class="post-intro">
                      Designed built & mantained a the lab managment system for
                      FOI Laboratories
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>

              <div>
                <div class="post">
                  <img class="thumbnail" src="images/ecom.jpg" />
                  <div class="post-preview">
                    <h6 class="post-title">Online Store - CoursePost Title</h6>
                    <p class="post-intro">
                      Online store with paypal payments intergration and guest
                      user shopping
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>

              <div>
                <div class="post">
                  <img class="thumbnail" src="images/membership site.jpg" />
                  <div class="post-preview">
                    <h6 class="post-title">Membership Website</h6>
                    <p class="post-intro">
                      Modulized guide for online courses with step by step
                      intructions
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="s2">
          <div class="main-container">
            <a href=""></a>
            <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

            <form id="contact-form">
              <a name="contact"></a>

              <label>Name</label>
              <input class="input-field" type="text" name="name" />

              <label>Subject</label>
              <input class="input-field" type="text" name="subject" />

              <label>Email</label>
              <input class="input-field" type="text" name="email" />

              <label>Message</label>
              <textarea class="input-field" name="message"></textarea>

              <input id="submit-btn" type="submit" value="Send" />
            </form>
          </div>
        </section>
      </div>
    );
  }
}
