import React, { Component } from "react";

import Header from "../../components/header";
import Profile from "../../components/profile";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";

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
  render() {
    return (
      <div>
        <section class="section-light">
          <div className="main-container">
            <Header name="Dhruv Saxena" />
            <Profile />
          </div>
        </section>
        <section className="section-dark">
          <div class="main-container">
            <About />
          </div>
        </section>
        <section class="section-light">
          <div class="main-container">
            <Projects />
          </div>
        </section>
        <section class="section-dark">
          <div class="main-container">
            <Contact />
          </div>
        </section>
      </div>
    );
  }
}
