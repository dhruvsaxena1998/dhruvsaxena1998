import React, { useContext } from "react";
import { Context } from "../../context/api";
import { Form, Input, Button, Textarea } from "./style";
export default (props) => {
  const { theme } = useContext(Context);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

      <Form theme={theme}>
        <label>Name</label>
        <Input theme={theme} />

        <label>Subject</label>
        <Input theme={theme} />

        <label>Email</label>
        <Input theme={theme} />

        <label>Message</label>
        <Textarea theme={theme}></Textarea>

        <Button theme={theme.buttonColor} onClick={(e) => {
          e.preventDefault();
        }}> Send </Button>
      </Form>
    </>
  );
};
