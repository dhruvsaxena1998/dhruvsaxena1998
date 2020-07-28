import styled from "styled-components";

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Post = styled.div`
  border: 1px solid ${(props) => props.theme};
  -webkit-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: scale(1.03);
  }
`;

export const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const PostPreview = styled.div`
  background-color: #fff;
  padding: 15px;
`;

export const PostTitle = styled.h6`
  color: black;
  margin: 0;
`;

export const PostIntro = styled.p`
  color: #4b5156;
  font-size: 14px;
`;
