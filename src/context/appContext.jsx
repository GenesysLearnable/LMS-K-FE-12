import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [forgotPassActive, setForgotPassActive] = useState(false);
  const [currentScreen, setCurrentScreen] = useState();

  return (
    <AppContext.Provider
      value={{
        activeNavItem,
        setActiveNavItem,
        isLoggedIn,
        setIsLoggedIn,
        forgotPassActive,
        setForgotPassActive,
        currentScreen,
        setCurrentScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
