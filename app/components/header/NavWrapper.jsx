import { useSelectedElements } from "@/app/contexts/SelectedElementsContext";
import React from "react";

const NavWrapper = ({ children}) => {
  const { setHeader, header } = useSelectedElements();
  return (
    <nav
      aria-label="Global"
      className={`flex items-center justify-between p-6 lg:px-8 ${
        header?.constrained ? "max-w-7xl mx-auto" : ""
      }`}
    >
      {children}
    </nav>
  );
};

export default NavWrapper;
