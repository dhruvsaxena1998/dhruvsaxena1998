import React from "react";
import styled from "styled-components";

const Greeting = styled.div`
  display: grid;
  text-align: center;
  align-content: center;
  min-height: 10em;
`;
export default (props) => (
  <Greeting>
    <h1>Hi, I'm {props.name}</h1>
  </Greeting>
);
