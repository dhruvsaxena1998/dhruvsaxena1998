import React, { useContext } from "react";
import { Context } from "../../context/api";
import ThemeSwitcher from "./ThemeSwitcher";
import BoxCard from "./BoxCard";

import {
  IntroWrapper,
  DotsWrapper,
  Close,
  Min,
  Max,
  Navigation,
  ProfileImage,
} from "./style";
import "./style";

export default (props) => {
  const { theme } = useContext(Context);
  return (
    <IntroWrapper theme={theme}>
      <div className="nav-wrapper">
        <a href="/">
          <DotsWrapper>
            <Close />
            <Min />
            <Max />
          </DotsWrapper>
        </a>
        <Navigation theme={theme.mainText}>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </Navigation>
      </div>
      <div className="left-column">
        <ProfileImage
          theme={theme.borderColor}
          src="https://i.imgur.com/iQSeDSu.jpg?1"
          alt="avatar"
        />
        <ThemeSwitcher />
      </div>
      <div className="right-column">
        <BoxCard />
      </div>
    </IntroWrapper>
  );
};
