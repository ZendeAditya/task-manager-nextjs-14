"use client";

import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();
import themes from "./theme";
export const GlobalProvider = ({ children }) => {
  const [seletectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[seletectedTheme];
  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
