import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initState = {
  theme: {
    mainColor: "#15202B",
    secondaryColor: "#192734",
    borderColor: "#164D56",
    mainText: "#fff",
    secondaryText: "#eeeeee",
    themeDotBorder: "#FFF",
    previewBackground: "rgb(25, 39, 52, 0.8)",
    previewShadow: "#111921",
    buttonColor: "#17a2b8",
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
