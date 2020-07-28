import React, { useContext, useEffect } from "react";
import { Context } from "../../context/api";

import Header from "../../components/header";
import Profile from "../../components/profile";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";

import { CONTAINER, SectionLight, SectionDark, MainContainer } from "./style";
import "./index.css";
export default () => {
  const { theme, setTheme } = useContext(Context);
  useEffect(() => {
    const initTheme = async () => {
      const persitTheme = localStorage.getItem('@theme')
      if (!!persitTheme) {
        setTheme(persitTheme)
      }
    }
    initTheme()
  }, [])
  return (
    <CONTAINER theme={theme}>
      <SectionLight theme={theme}>
        <MainContainer>
          <Header name="Dhruv Saxena" />
          <Profile />
        </MainContainer>
      </SectionLight>
      <SectionDark theme={theme}>
        <MainContainer>
          <About />
        </MainContainer>
      </SectionDark>
      <SectionLight theme={theme}>
        <MainContainer>
          <Projects />
        </MainContainer>
      </SectionLight>
      <SectionDark theme={theme}>
        <MainContainer>
          <Contact />
        </MainContainer>
      </SectionDark>
    </CONTAINER>
  );
};
