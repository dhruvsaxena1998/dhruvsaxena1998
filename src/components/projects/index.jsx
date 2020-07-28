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
            <Thumbnail src="https://mobi.readwhere.com/img/native_apps_main.jpg" />
            <PostPreview theme={theme.secondaryColor}>
              <PostTitle>Content Management System</PostTitle>
              <PostIntro>
              A basic Content Management System
              </PostIntro>
              <div style={{ textAlign: "right" }}>
                <a href="https://github.com/dhruvsaxena1998/cms">Github</a>
              </div>
            </PostPreview>
          </Post>
        </div>

        <div>
          <Post theme={theme.borderColor}>
            <Thumbnail src="https://i.imgur.com/qgVgn6c.png"/>
            <PostPreview theme={theme.secondaryColor}>
              <PostTitle>Simplify - URL Shortner and tracker</PostTitle>
              <PostIntro>
                Developed with vuetify and express.
              </PostIntro>
              <div style={{ textAlign: "right" }}>
                <a href="https://github.com/dhruvsaxena1998/simplify-vue">Github</a>
              </div>
            </PostPreview>
          </Post>
        </div>

        <div>
          <Post theme={theme.borderColor}>
            <Thumbnail src="https://i.imgur.com/yx1lX0w.png" />
            <PostPreview theme={theme.secondaryColor}>
              <PostTitle>Monstrosity</PostTitle>
              <PostIntro>
                <br />
                Click-based game build on vue.js
              </PostIntro>
              <div style={{ textAlign: "right" }}>
                <a style={{ marginRight: 10 }} href="https://saxenadhruv.me/monstrosity/"> Live Demo </a>
                <a href="https://github.com/dhruvsaxena1998/monstrosity-vue">Github</a>
              </div>
            </PostPreview>
          </Post>
        </div>

        <div>
          <Post theme={theme.borderColor}>
            <Thumbnail src="https://i.imgur.com/xQfE0q1.png" />
            <PostPreview theme={theme.secondaryColor}>
              <PostTitle>UN-NAMMED</PostTitle>
              <PostIntro>
                -- NO INFO AVAILABLE -- <br/>
                -- NO INFO AVAILABLE -- <br/>
                -- NO INFO AVAILABLE -- <br/>
              </PostIntro>
              <div style={{ textAlign: "right" }}>
                <a href="https://github.com/dhruvsaxena1998/un-nammed">Github</a>
              </div>
            </PostPreview>
          </Post>
        </div>
      </PostWrapper>
    </>
  );
};
