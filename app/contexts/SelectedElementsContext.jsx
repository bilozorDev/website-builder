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
    display: false,
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
    display: false,
    options: {
      iconsStyle: [
        {
          id: "default",
          name: "With solid background",
          description: "Brand color as BG and white icons",
          selected: true,
        },
        {
          id: "no-background",
          name: "Solid color with no background",
          description: "Brand color as text color and no background",
          selected: false,
        },
        {
          id: "checkmarks",
          name: "Just checkmarks instead of icons",
          description: "Each feature will have a checkmark instead of an icon",
          selected: false,
        },
        {
          id: "no-icons",
          name: "Icons disabled",
          description: "Feature will just have a title and description",
          selected: false,
        },
      ],
      listStyle: [
        {
          id: "default",
          name: "2 Columns",
          description: "List of features in 2 columns",
          selected: true,
        },
        {
          id: "3-columns",
          name: "3 Columns",
          description: "List of features in 3 columns",
          selected: false,
        },
        {
          id: "4-columns",
          name: "4 Columns",
          description: "List of features in 4 columns",
          selected: false,
        },
      ],
      styleSelections: [
        {
          id: "default",
          name: "Centered content",
          description: "Optional link to feature page on Title click",
          selected: false,
        },
        {
          id: "image-under-text",
          name: "Text beetwen headline and features list",
          description: "Optional link to feature page on Title click",
          selected: false,
        },
        {
          id: "headline-left-and-features-list-on-right",
          name: "Headline left and 2 columns of features on the right",
          description: "Optional link to feature page on Title click",
          selected: false,
        },
        {
          id: "image-right",
          name: "Text & features on the left and image on the right",
          description: "Optional link to feature page on Title click",
          selected: false,
        },
      ],
      featuresList: [
        {
          name: "Analytics",
          description:
            "Get a better understanding where your traffic is coming from",
          icon: ChartPieIcon,
          link: "http://localhost:3000/",
        },
        {
          name: "Engagement",
          description:
            "Speak directly to your customers with our engagement tool",
          icon: CursorArrowRaysIcon,
          link: "",
        },
        {
          name: "Security",
          description: "Your customers’ data will be safe and secure",
          icon: FingerPrintIcon,
          link: "",
        },
        {
          name: "Integrations",
          description: "Your customers’ data will be safe and secure",
          icon: SquaresPlusIcon,
          link: "",
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
  const [newsletter, setNewsletter] = useState({
    display: false,
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
      headline: {
        text: "Data to enrich your online business",
      },
      cta: [
        {
          text: "Get Started",
          link: "#",
          style: "btn",
        },
      ],
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
        newsletter,
        setNewsletter,
      }}
    >
      {children}
    </SelectedElementsContext.Provider>
  );
}

export function useSelectedElements() {
  return useContext(SelectedElementsContext);
}
