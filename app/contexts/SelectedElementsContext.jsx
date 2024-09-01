"use client";

import { createContext, useContext, useState } from "react";

const SelectedElementsContext = createContext();

export function SelectedElementsProvider({ children }) {
  const [currentStep, setCurrentStep] = useState("Header");
  const [header, setHeader] = useState({
    darkBg: false,
    constrained: true,
    brandBg: false,
    flyoutMegaMenu: {
      selected: false,
      fullWidth: false,
    },
    simpleFlyoutMenu: {
      selected: false,
    },
    alignment: { options: [{ id: "left" }, { id: "center" }, { id: "right" }], selected: "center" },
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
