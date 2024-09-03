"use client";

import { createContext, useContext, useState } from "react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

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
        { name: "Company", href: "#",
      },
      ],
    },
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
