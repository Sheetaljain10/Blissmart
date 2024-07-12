import { createContext } from "react";
import { popularProducts } from "../data";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = { popularProducts };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
