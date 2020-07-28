import styled from "styled-components";

export const CONTAINER = styled.div`
  transition: 0.3s;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & strong {
    color: ${(props) => props.theme.mainText};
    font-family: "Russo One", sans-serif;
    font-weight: 500;
  }

  & p,
  & li,
  & span,
  & label,
  & input,
  & textarea {
    color: ${(props) => props.theme.secondaryText};
    font-family: "Roboto Mono", monospace;
  }

  & a {
    text-decoration: none;
    color: #17a2b8;
  }

  & ul {
    list-style: none;
  }

  & h1 {
    font-size: 56px;
  }
  & h2 {
    font-size: 36px;
  }
  & h3 {
    font-size: 28px;
  }
  & h4 {
    font-size: 24px;
  }
  & h5 {
    font-size: 20px;
  }
  & h6 {
    font-size: 16px;
  }
`;

export const SectionLight = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  overflow: auto;
`;

export const SectionDark = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  overflow: auto;
`;

export const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;
