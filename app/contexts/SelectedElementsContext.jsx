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
  const [currentStep, setCurrentStep] = useState("Body");
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
        { name: "Company", href: "#" },
      ],
    },
  });
  const [hero, setHero] = useState({
    display: true,
    options: {
      styleSelections: [
        {
          id: "default",
          name: "Centered text without image",
          description: "Include a headline and description",
          selected: true,
        },
        {
          id: "image_right",
          name: "Split with image",
          description: "Image on the left, text on the right",
          selected: false,
        },
        {
          id: "image_bottom",
          name: "Image on the bottom",
          description: "Text on top, image on the bottom",
          selected: false,
        },
        {
          id: "array_of_images",
          name: "Array of images",
          description: "Text on left, and array of images on right",
          selected: false,
        },
      ],

      news: {
        text: "Announcing our next round of funding.",
        link: "#",
      },
      headline: {
        text: "Data to enrich your online business",
      },
      description: {
        text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
      },
      cta: [
        {
          text: "Get Started",
          link: "#",
          style: "btn",
        },
        {
          text: "Learn Morse",
          link: "#",
          style: "text",
        },
      ],
    },
  });
  const [features, setFeatures] = useState({
    display: true,
    options: {
      styleSelections: [{}],
      featuresList: [
        {
          name: "Analytics",
          description:
            "Get a better understanding where your traffic is coming from",
          icon: ChartPieIcon,
          link: "http://localhost:3000/"
        },
        {
          name: "Engagement",
          description:
            "Speak directly to your customers with our engagement tool",
          icon: CursorArrowRaysIcon,
          link: ""
        },
        {
          name: "Security",
          description: "Your customers’ data will be safe and secure",
          icon: FingerPrintIcon,
          link: ""
        },
        {
          name: "Integrations",
          description: "Your customers’ data will be safe and secure",
          icon: SquaresPlusIcon,
          link: ""
        },
      ],

      subtitle: {
        text: "Deploy faster",
      
      },
      headline: {
        text: "Everything you need to deploy your app",
      },
      description: {
        text: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
      },
    },
  });

  return (
    <SelectedElementsContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        header,
        setHeader,
        hero,
        setHero,
        features,
        setFeatures,
      }}
    >
      {children}
    </SelectedElementsContext.Provider>
  );
}

export function useSelectedElements() {
  return useContext(SelectedElementsContext);
}
