import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageReducer";
import projectsReducer from "./projectsReducer";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    language: languageReducer,
  },
});
export default store;
