import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ManageTask from "./components/manage_task/ManageTask";
import TasksList from "./components/tasks_list/TasksList";
import { themeDark, themeLight } from "./styles/index";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  Container,
  Typography,
  ThemeProvider,
  CssBaseline,
  IconButton,
} from "@mui/material";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "Research new recipes for dinner",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Attend yoga class at 6pm",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Schedule dentist appointment",
      completed: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showActiveTasks, setShowActiveTasks] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          color="#E9C597"
          fontWeight="800"
          gutterBottom
          sx={{ marginTop: "15px" }}
        >
          PERSONAL TASK MANAGER
        </Typography>
        <IconButton
          onClick={() => setIsDarkMode((prev) => !prev)}
          sx={{ float: "right" }}
        >
          {isDarkMode ? (
            <DarkModeIcon fontSize="large" sx={{ color: "#F7ECDE" }} />
          ) : (
            <Brightness7Icon fontSize="large" />
          )}
        </IconButton>
        <ManageTask
          todos={todos}
          setTodos={setTodos}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <TasksList
          todos={todos}
          setTodos={setTodos}
          showActiveTasks={showActiveTasks}
          setShowActiveTasks={setShowActiveTasks}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          editText={editText}
          setEditText={setEditText}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
