import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  return (
    <AppContext.Provider
      value={{
        activeNavItem,
        setActiveNavItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
