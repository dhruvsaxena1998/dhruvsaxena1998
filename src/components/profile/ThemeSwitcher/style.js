import styled from "styled-components";

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 50%;
  margin: 5px;
  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    height: 23px;
    width:23px;
    border-width: 5px;
  }
`;

export const LightMode = styled(Dot)`
  background-color: #fff;
  border: 2px solid ${(props) => props.theme};
`;
export const BlueMode = styled(Dot)`
  background-color: #192734;
  border: 2px solid ${(props) => props.theme};
`;
export const GreenMode = styled(Dot)`
  background-color: #78866b;
  border: 2px solid ${(props) => props.theme};
`;
export const PurpleMode = styled(Dot)`
  background-color: #7e4c74;
  border: 2px solid ${(props) => props.theme};
`;