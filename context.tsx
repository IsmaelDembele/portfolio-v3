import React, { createContext, useState } from "react";

export const AppContext = createContext<any>(false);

type TProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: TProps) => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <AppContext.Provider value={{ drawer, setDrawer, toggleDrawer }}>
      {children}
    </AppContext.Provider>
  );
};
