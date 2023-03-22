import React from "react";
import Button from "../button/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  Divider,
  Typography,
  Box,
  IconButton,
  TextField,
} from "@mui/material";

const TasksList = ({
  todos,
  setTodos,
  showActiveTasks,
  setShowActiveTasks,
  editIndex,
  setEditIndex,
  editText,
  setEditText,
}) => {
  const handleCheckboxChange = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (id) => {
    setEditIndex(id);
    setEditText(todos.find((todo) => todo.id === id).text);
  };

  const handleSaveEdit = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(newTodos);
    setEditIndex(-1);
    setEditText("");
  };

  const deleteCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const activeTasks = todos.filter((todo) => !todo.completed).length;

  const handleShowActiveTasks = () => {
    setShowActiveTasks(!showActiveTasks);
  };

  const visibleTodos = showActiveTasks
    ? todos.filter((todo) => !todo.completed)
    : todos;

  return (
    <Card>
      {visibleTodos.map((todo) => (
        <List key={todo.id}>
          <ListItem
            sx={{
              fontSize: "20px",
            }}
          >
            {editIndex === todo.id ? (
              <>
                <TextField
                  variant="outlined"
                  size="small"
                  value={editText}
                  onChange={(event) => setEditText(event.target.value)}
                />
                <IconButton
                  onClick={() => handleSaveEdit(todo.id)}
                  disabled={!editText}
                >
                  <CheckCircleIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon fontSize="large" />}
                  checkedIcon={<CheckCircleIcon fontSize="large" />}
                  color="success"
                  checked={todo.completed}
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <IconButton onClick={() => handleEdit(todo.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </ListItem>
          <Divider sx={{ background: "white" }} />
        </List>
      ))}
      <Typography paragraph>Active: {activeTasks}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Button variant="text" onClick={handleShowActiveTasks}>
          {showActiveTasks ? "All Tasks" : "Active Tasks Only"}
        </Button>
        <Button variant="text" onClick={deleteCompleted}>
          Clear Completed
        </Button>
      </Box>
    </Card>
  );
};

export default TasksList;
