import React, { useContext } from "react";
import { Context } from "../../../context/api";
import { ThemeWrapper, LightMode, BlueMode, GreenMode, PurpleMode } from "./style";
export default (props) => {
  const { theme } = useContext(Context);
  return (
    <>
      <h5 style={{ textAlign: "center", lineHeight: 0 }}>Personalize Theme</h5>
      <ThemeWrapper>
        <LightMode theme={theme.themeDotBorder} onClick={() => {}} />
        <BlueMode theme={theme.themeDotBorder} onClick={() => {}} />
        <GreenMode theme={theme.themeDotBorder} onClick={() => {}} />
        <PurpleMode theme={theme.themeDotBorder} onClick={() => {}} />
      </ThemeWrapper>
    </>
  );
};
