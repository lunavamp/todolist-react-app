import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Card, IconButton, Box } from "@mui/material/";
import SendIcon from "@mui/icons-material/Send";

const ManageTask = ({ inputValue, setInputValue, todos, setTodos }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  return (
    <Card>
      <Box component="form" sx={{ display: "inline-flex" }}>
        <TextField
          variant="filled"
          onChange={handleInputChange}
          placeholder={"Add new task.."}
          value={inputValue}
        />
        <IconButton
          onClick={handleSubmit}
          type="submit"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <SendIcon fontSize="large" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ManageTask;
