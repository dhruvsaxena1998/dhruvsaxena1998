import React, { useContext } from "react";
import { Context } from "../../context/api";
import { AboutWrapepr, Skills, SocialImg, SocialLinks } from "./style";

export default (props) => {
  const { theme } = useContext(Context);
  return (
    <AboutWrapepr>
      <div className="about-me">
        <h4>More about me</h4>
        <p>
          I build new projects just to tickle my brain and love teaching others
          how they're made.
        </p>
        <p>
          While I keep busy teaching courses, I still take interviews in search
          of a great team & projects that interest me.
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
        <Skills theme={theme.previewShadow}>
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
        </Skills>
      </div>
      <SocialLinks>
        <SocialImg src="https://i.imgur.com/hqKJRvG.png" />
        <h4>Find me on Github & Facebook and other platforms.</h4>
        <a target="_blank" href="https://github.com/dhruvsaxena1998">
          Github: @dhruvsaxena1998
        </a>
        <br />
        <a target="_blank" href="https://facebook.com/dhruvsaxena1998">
          Facebook: @dhruvsaxena1998
        </a>
      </SocialLinks>
    </AboutWrapepr>
  );
};
