import React from "react";

export default (props) => (
  <div class="about-wrapper">
    <div class="about-me">
      <h4>More about me</h4>

      <p>
        I build new projects just to tickle my brain and love teaching others
        how they're made.
      </p>

      <p>
        While I keep busy teaching courses, I still take interviews in search of
        a great team & projects that interest me.
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
);
