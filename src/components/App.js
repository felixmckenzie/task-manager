import React, { useReducer } from "react";
import reducer from "../utils/reducer";
import { loadState, saveState } from "../utils/local-storage";
import Title from "./Title";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import NavBar from "./NavBar";
import Container from "@mui/material/Container";
import { CustomThemeProvider } from "../utils/ThemeContext";
import Layout from "./Layout";

const App = () => {
  let initialState = loadState();

  if (initialState === undefined) {
    initialState = {
      list: [],
      newText: "",
    };
  }
  saveState(initialState);

  const [store, dispatch] = useReducer(reducer, initialState);
  const { list, newText } = store;

  return (
    <CustomThemeProvider>
      <Layout>
        <NavBar />
        <Container maxWidth="sm" sx={{ padding: "10px", marginTop: "20px" }}>
          <Title />
          <NewTaskForm dispatch={dispatch} />
        </Container>
        <TaskList list={list} dispatch={dispatch} newText={newText} />
      </Layout>
    </CustomThemeProvider>
  );
};

export default App;
