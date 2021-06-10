import { Button, Container, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(text);
    addTodo(text);
    setText("");
    // event.target.reset();
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Let's Do This Today !!!"
            required={true}
            style={{ backgroundColor: "#FFFFFF", borderRadius: "5px" }}
            value={text}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            // color="primary"
            style={{ backgroundColor: "#0FBFCC", marginTop: 5 }}
            // style={{ marginTop: 5 }}
            type="submit"
          >
            Add Todo
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default TodoForm;
