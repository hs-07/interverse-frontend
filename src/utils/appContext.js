import { createContext, useContext } from "react";

const AppContext = createContext | undefined;

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const contextValue = {};

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, useAppContext, AppContextProvider };
