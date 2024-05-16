import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activeNavItem,
        setActiveNavItem,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
