import React, { useContext } from "react";
import { Context } from "../../../context/api";
import { ThemeWrapper, LightMode, BlueMode, GreenMode, PurpleMode } from "./style";
export default (props) => {
  const { theme, setTheme} = useContext(Context);
  return (
    <>
      <h5 style={{ textAlign: "center", lineHeight: 0 }}>Personalize Theme</h5>
      <ThemeWrapper>
        <LightMode theme={theme.themeDotBorder} onClick={() => setTheme('default')} />
        <BlueMode theme={theme.themeDotBorder} onClick={() => setTheme('blue')} />
        <GreenMode theme={theme.themeDotBorder} onClick={() => setTheme('green')} />
        <PurpleMode theme={theme.themeDotBorder} onClick={() => setTheme('purple')} />
      </ThemeWrapper>
    </>
  );
};
