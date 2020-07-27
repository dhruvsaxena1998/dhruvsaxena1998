import styled from "styled-components";

const Corner = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1.5px solid #17a2b8;
  background: #fff;
  position: absolute;
`;

export const PreviewShadow = styled.div`
  background-color: ${(props) => props.theme};
  max-width: 300px;
  height: 180px;
  padding: 30px 0 0 30px;
`;
export const Preview = styled.div`
  width: 300px;
  border: 1.5px solid #17a2b8;
  background-color: ${(props) => props.theme};
  padding: 15px;
  position: relative;
`;
export const TopLeftCorner = styled(Corner)`
  top: -5px;
  left: -5px;
`;
export const TopRightCorner = styled(Corner)`
  top: -5px;
  right: -5px;
`;
export const BottomLeftCorner = styled(Corner)`
  bottom: -5px;
  left: -5px;
`;
export const BottomRightCorner = styled(Corner)`
  bottom: -5px;
  right: -5px;
`;
