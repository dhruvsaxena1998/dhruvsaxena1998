import styled from "styled-components";

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
