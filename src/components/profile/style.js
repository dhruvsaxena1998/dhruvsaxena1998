import styled from "styled-components";

export const IntroWrapper = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px 5px 0 0;
  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "nav-wrapper nav-wrapper"
    "left-column right-column";
  & .nav-wrapper {
    border-radius: 5px 5px 0 0;
    grid-area: nav-wrapper;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.mainColor};
  }
  & .left-column {
    grid-area: left-column;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  & .right-column {
    grid-area: right-column;
    display: grid;
    align-content: center;

    padding-top: 50px;
    padding-bottom: 50px;

    @media screen and (max-width: 880px) {
      justify-content: center;
      align-items: center;
      margin-top: -4rem;
    }

    @media screen and (max-width: 560px) {
      margin-left: -1rem;
    }

    @media screen and (max-width: 400px) {
      margin-left: -1.5rem;
    }
  }
  @media screen and (max-width: 880px) {
    justify-content: center;
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav-wrapper"
      "left-column"
      "right-column";
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const BrowserDot = styled.div`
  background-color: black;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: scale(1.2);
  }
`;

export const Close = styled(BrowserDot)`
  background-color: #fc6058;
`;

export const Min = styled(BrowserDot)`
  background-color: #fec02f;
`;

export const Max = styled(BrowserDot)`
  background-color: #2aca3e;
`;

export const Navigation = styled.ul`
  margin: 0;
  padding: 10px;

  & a {
    color: ${(props) => props.theme};
  }

  & li {
    display: inline-block;
    margin: inherit 5px;
  }
`;

export const ProfileImage = styled.img`
  display: block;
  margin: 0 auto;

  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 2px solid ${(props) => props.theme};
`;
