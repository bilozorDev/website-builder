"use client";

import { createContext, useContext, useState } from "react";

const SelectedElementsContext = createContext();

export function SelectedElementsProvider({ children }) {
  const [currentStep, setCurrentStep] = useState("Header");
  const [header, setHeader] = useState({
    constrained: true,
    bgColor: "#ffffff",
    flyoutMegaMenu: {
      selected: false,
      fullWidth: false,
    },
    simpleFlyoutMenu: {
      selected: false,
    },
    alignment: {
      options: [{ id: "start" }, { id: "center" }, { id: "end" }],
      selected: "center",
    },
    menuItems: {
      regularItems: [
        { name: "Product", href: "#" },
        { name: "Features", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Company", href: "#" },
      ],
    }

  });

  return (
    <SelectedElementsContext.Provider
      value={{ currentStep, setCurrentStep, header, setHeader }}
    >
      {children}
    </SelectedElementsContext.Provider>
  );
}

export function useSelectedElements() {
  return useContext(SelectedElementsContext);
}
