import { createContext, useContext, useState } from "react";
export const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
  const [isGlobalLoading, setGlobalLoading] = useState(false);

  return <LoaderContext.Provider value={{ isGlobalLoading, setGlobalLoading }}>{children}</LoaderContext.Provider>;
};

export const useLoader = () => {
  return useContext(LoaderContext);
};