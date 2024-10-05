import { useHeader } from "@/app/contexts/HeaderContext";
import React from "react";

const NavWrapper = ({ children}) => {
  const { setHeader, header } = useHeader();
  return (
    <nav
      aria-label="Global"
      className={`flex items-center justify-between px-8 lg:space-x-12 ${
        header?.constrained ? "max-w-7xl mx-auto" : ""
      }`}
    >
      {children}
    </nav>
  );
};

export default NavWrapper;
