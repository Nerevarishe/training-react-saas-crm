import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  appState: {
    isSideBarPulledOut: false,
  },
  tasksWidget: {
    updateWidget: 0,
    tasksOnPage: 3,
  },
  dateSelector: {
    selectedDate: null,
  },
  dealsWidget: {
    updateWidget: 0,
  },
  tasksChartWidget: {
    updateWidget: 0,
  },
  auth: {
    isLoggedIn: true,
    username: "Sierra Ferguson",
    email: "s.ferguson@gmail.com",
  },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
