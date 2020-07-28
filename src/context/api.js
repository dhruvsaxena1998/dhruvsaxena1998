import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initState = {
  theme: {
    mainColor: "#eaeaea",
    secondaryColor: "#fff",
    borderColor: "#c1c1c1",
    mainText: "black",
    secondaryText: "#4b5156",
    themeDotBorder: "#24292e",
    previewBackground: "#fbf9f3",
    previewShadow: "#f0ead6",
    buttonColor: "black",
  },
  loading: true,
};

export const Context = createContext(initState);
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);

  const setTheme = (theme) => {
    localStorage.setItem('@theme', theme)
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
  };

  return (
    <Context.Provider
      value={{
        theme: state.theme,
        loading: state.loading,
        setTheme
      }}
    >
      {children}
    </Context.Provider>
  );
};
