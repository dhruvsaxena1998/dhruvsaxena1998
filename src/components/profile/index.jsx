import React from "react";

export default (props) => (
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
      <h5 style={{ textAlign: "center", lineHeight: 0 }}>Personalize Theme</h5>

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
);
