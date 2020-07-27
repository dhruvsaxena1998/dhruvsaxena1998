import React, { useContext } from "react";
import { Context } from "../../../context/api";

import {
  PreviewShadow,
  Preview,
  TopLeftCorner,
  TopRightCorner,
  BottomLeftCorner,
  BottomRightCorner,
} from "./style";

export default (props) => {
  const { theme } = useContext(Context);
  return (
    <PreviewShadow theme={theme.previewShadow}>
      <Preview theme={theme.previewBackground}>
        <TopLeftCorner />
        <TopRightCorner />
        <h3>What I Do</h3>
        <p>
          I'm Fulltime JavaScript Frontend Developer. <br />
            <small>ReactJS | React-Native | VueJS</small>
        </p>
        <BottomLeftCorner />
        <BottomRightCorner />
      </Preview>
    </PreviewShadow>
  );
};
