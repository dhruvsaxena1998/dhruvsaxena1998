import React, { useContext } from "react";
import { Context } from "../../context/api";
import {
  PostWrapper,
  Post,
  Thumbnail,
  PostPreview,
  PostTitle,
  PostIntro,
} from "./style";
export default (props) => {
  const { theme } = useContext(Context);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Some of my past projects</h3>
      <PostWrapper>
        <div>
          <Post theme={theme.borderColor}>
            <Thumbnail src="images/dash.jpg" />
            <PostPreview>
              <PostTitle>Laboratory Management System</PostTitle>
              <PostIntro>
                Designed built & mantained a the lab managment system for FOI
                Laboratories
              </PostIntro>
              <div style={{ textAlign: "right" }}>
                <a href="#">Read More</a>
              </div>
            </PostPreview>
          </Post>
        </div>

        <div>
          <Post theme={theme.borderColor}>
            <Thumbnail src="images/dash.jpg" />
            <PostPreview>
              <PostTitle>Laboratory Management System</PostTitle>
              <PostIntro>
                Designed built & mantained a the lab managment system for FOI
                Laboratories
              </PostIntro>
              <div style={{ textAlign: "right" }}>
                <a href="#">Read More</a>
              </div>
            </PostPreview>
          </Post>
        </div>

        <div>
          <Post theme={theme.borderColor}>
            <Thumbnail src="images/dash.jpg" />
            <PostPreview>
              <PostTitle>Laboratory Management System</PostTitle>
              <PostIntro>
                Designed built & mantained a the lab managment system for FOI
                Laboratories
              </PostIntro>
              <div style={{ textAlign: "right" }}>
                <a href="#">Read More</a>
              </div>
            </PostPreview>
          </Post>
        </div>
      </PostWrapper>
    </>
  );
};
