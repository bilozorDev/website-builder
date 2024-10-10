"use client";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { createContext, useContext, useState, useEffect } from "react";

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  // Load initial state from localStorage or use default values
  const [header, setHeader] = useState(() => {
    const savedHeader = localStorage.getItem("header");
    return savedHeader
      ? JSON.parse(savedHeader)
      : {
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
              {
                name: "Product",
                id: "product",
                href: "#",
              },
              { name: "Features", href: "#", id: "features" },
              { name: "Marketplace", href: "#", id: "marketplace" },
              { name: "Company", href: "#", id: "company" },
            ],
            cta: {
              text: "Get Started",
              href: "#",
            },
          },
        };
  });

  // Sync to localStorage whenever header state changes
  useEffect(() => {
    localStorage.setItem("header", JSON.stringify(header));
  }, [header]);

  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
}

// Custom hook to use the Header context
export function useHeader() {
  return useContext(HeaderContext);
}
