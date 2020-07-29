import styled from "styled-components";

export const AboutWrapepr = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding-bottom: 50px;
  padding-top: 50px;
  gap: 100px;
`;

export const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme};
`;

export const SocialLinks = styled.div`
  display: grid;
  align-content: center;
  text-align: center;

  @media screen and (max-width: 778px) {
    margin-top: -4rem
  }
`;

export const SocialImg = styled.img`
  width: 100%;
`;
