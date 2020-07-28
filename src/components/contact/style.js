import styled from "styled-components";

export const Form = styled.form`
  display: block;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 15px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.mainColor};
  margin-bottom: 50px;

  & label {
    line-height: 2.7em;
  }

  & textarea {
    min-height: 100px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0 10px 0;
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  font-size: 14px;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  font-size: 16px;
  font-family: "Russo One", sans-serif;
  letter-spacing: 5px;
  background-color: ${(props) => props.theme};
  border: none;
`;
