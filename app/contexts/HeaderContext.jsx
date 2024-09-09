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
                href: "#",
                megaMenu: {
                  menuItems: [
                    {
                      name: "Analytics",
                      description:
                        "Get a better understanding where your traffic is coming from",
                      href: "#",
                      icon: ChartPieIcon,
                    },
                    {
                      name: "Engagement",
                      description:
                        "Speak directly to your customers with our engagement tool",
                      href: "#",
                      icon: CursorArrowRaysIcon,
                    },
                    {
                      name: "Security",
                      description: "Your customers’ data will be safe and secure",
                      href: "#",
                      icon: FingerPrintIcon,
                    },
                    {
                      name: "Integrations",
                      description: "Your customers’ data will be safe and secure",
                      href: "#",
                      icon: SquaresPlusIcon,
                    },
                  ],
                  callsToAction: [
                    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
                    { name: "Contact sales", href: "#", icon: PhoneIcon },
                    {
                      name: "View all products",
                      href: "#",
                      icon: RectangleGroupIcon,
                    },
                  ],
                },
              },
              { name: "Features", href: "#" },
              { name: "Marketplace", href: "#" },
              { name: "Company", href: "#" },
            ],
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
